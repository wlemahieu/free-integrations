import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid';
import ChatInput from 'modules/Chat/Input';
import Conversation from 'modules/Chat/Conversation';

class Chat extends PureComponent {
  constructor() {
    super();
    this.state = {
      name: uuid(),
      audioPlayed: false
    };
  }

  onSearch = input => {
    if (input) {
      const name = this.state.name;
      const payload = {
        input,
        name
      };
      this.setState({ audioPlayed: false });
      this.props.dispatch({ type: 'SAVE_USER_INPUT', payload });
    }
  };

  updateInput = input => (input ? this.props.dispatch({ type: 'USER_KEY_PRESS', payload: input }) : null);

  render() {
    const { input, inputs, responses } = this.props;
    const disabledSubmit = inputs.length !== responses.length;
    if (inputs.length && !disabledSubmit && !this.state.audioPlayed) {
      const audio = new Audio(`http://localhost:3000/${this.state.name}-audio.wav?decache=${Math.random()}`);
      audio.play();
      this.setState({ audioPlayed: true });
    }
    return (
      <div>
        <ChatInput
          disabledSubmit={disabledSubmit}
          input={input}
          onSearch={this.onSearch}
          updateInput={this.updateInput}
        />
        <Conversation inputs={inputs} responses={responses} />
      </div>
    );
  }
}

Chat.propTypes = {
  dispatch: PropTypes.func,
  input: PropTypes.string,
  inputs: PropTypes.array,
  responses: PropTypes.array
};

Chat.defaultProps = {
  dispatch: () => {},
  input: '',
  inputs: [],
  responses: []
};

const mapStateToProps = state => state.chat;

export default connect(mapStateToProps)(Chat);
