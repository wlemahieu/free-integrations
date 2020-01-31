import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid';
import ChatInput from 'modules/Chat/Input';
import Conversation from 'modules/Chat/Conversation';

const reducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
  case 'SET_AUDIO_PLAYED':
    return {
      ...state,
      audioPlayed: payload
    };
  case 'SET_INPUTS':
    return {
      ...state,
      inputs: [...state.inputs, action.payload]
    };
  case 'SET_INPUT':
    return {
      ...state,
      currentInput: payload
    };
  case 'SET_NAME':
    return {
      ...state,
      name: payload
    };
  default:
    throw new Error('No local reducer action provided');
  }
};

const Chat = React.memo(props => {
  const { responses } = props;
  const initialState = {
    audioPlayed: false,
    currentInput: '',
    inputs: [],
    name: uuid()
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { audioPlayed, currentInput, inputs, name } = state;

  // un-mount
  useEffect(() => {
    return () => props.dispatch({ type: 'LOCATION_CHANGE' });
  }, [props]);

  const onSearch = input => {
    if (input) {
      const payload = { input, name };
      dispatch({ type: 'SET_INPUTS', payload: input });
      dispatch({ type: 'SET_INPUT', payload: '' });
      dispatch({ type: 'SET_AUDIO_PLAYED', payload: false });
      props.dispatch({ type: 'SEND_USER_INPUT', payload });
    }
  };

  const updateInput = input => {
    if (input) {
      dispatch({ type: 'SET_INPUT', payload: input });
    }
  };

  const disabledSubmit = inputs.length !== responses.length;

  if (inputs.length && !disabledSubmit && !audioPlayed) {
    const audio = new Audio(`http://localhost:3000/${name}-audio.wav?decache=${Math.random()}`);
    audio.play();
    dispatch({ type: 'SET_AUDIO_PLAYED', payload: true });
  }

  return (
    <>
      <ChatInput
        disabledSubmit={disabledSubmit}
        input={currentInput}
        onSearch={onSearch}
        updateInput={updateInput}
      />
      <Conversation inputs={inputs} responses={responses} />
    </>
  );
});

Chat.propTypes = {
  dispatch: PropTypes.func,
  responses: PropTypes.array
};

Chat.defaultProps = {
  dispatch: () => {},
  responses: []
};

const mapStateToProps = state => state.chat;

export default connect(mapStateToProps)(Chat);
