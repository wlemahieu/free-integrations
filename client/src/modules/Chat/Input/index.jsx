import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Col, Input, Row } from 'antd';

const { Search } = Input;

class ChatInput extends PureComponent {
  componentDidUpdate() {
    this.roseInput.focus();
  }

  render() {
    const { disabledSubmit, input } = this.props;
    return (
      <Row className="centered" style={{ paddingTop: '40px' }}>
        <Col span={12} offset={6}>
          <Search
            autoFocus
            ref={(search) => { this.roseInput = search; }}
            placeholder="Say something to Rose Watson"
            enterButton
            size="large"
            onChange={e => this.props.updateInput(e.target.value)}
            onSearch={() => this.props.onSearch(input)}
            disabled={disabledSubmit}
            value={input}
          />
        </Col>
      </Row>
    );
  }
}

ChatInput.propTypes = {
  disabledSubmit: PropTypes.bool,
  input: PropTypes.string,
  onSearch: PropTypes.func,
  updateInput: PropTypes.func
};

ChatInput.defaultProps = {
  disabledSubmit: false,
  input: '',
  onSearch: () => {},
  updateInput: () => {}
};

export default ChatInput;
