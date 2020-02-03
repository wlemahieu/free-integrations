import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid';
import ChatInput from 'modules/Chat/Input';
import Conversation from 'modules/Chat/Conversation';
import Context from './context';

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
  case 'SET_VOICE':
    return {
      ...state,
      currentVoice: payload
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
  const { dispatch: rispatch, responses, voices } = props;
  const initialState = {
    audioPlayed: false,
    currentInput: '',
    currentVoice: 'en-GB_KateVoice',
    inputs: [],
    name: uuid()
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { audioPlayed, currentInput, currentVoice, inputs, name } = state;

  useEffect(() => {
    // mount
    rispatch({ type: 'GET_VOICES' });
    // unmount
    return () => rispatch({ type: 'LOCATION_CHANGE' });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const disabledSubmit = inputs.length !== responses.length;

  const onSearch = input => (() => {
    if (input) {
      const voice = currentVoice;
      const payload = { input, name, voice };
      dispatch({ type: 'SET_INPUTS', payload: input });
      dispatch({ type: 'SET_INPUT', payload: '' });
      dispatch({ type: 'SET_AUDIO_PLAYED', payload: false });
      rispatch({ type: 'SEND_INPUT', payload });
    }
  });

  const onVoiceChange = voice => {
    const newVoice = voices[voice].voice;
    dispatch({ type: 'SET_VOICE', payload: newVoice });
  };

  const updateInput = input => dispatch({ type: 'SET_INPUT', payload: input });

  if (inputs.length && !disabledSubmit && !audioPlayed) {
    const audio = new Audio(`http://localhost:3000/conversations/${name}-audio.wav?decache=${Math.random()}`);
    audio.play();
    dispatch({ type: 'SET_AUDIO_PLAYED', payload: true });
  }

  return (
    <Context.Provider value={{ rispatch }}>
      <ChatInput
        disabledSubmit={disabledSubmit}
        input={currentInput}
        onVoiceChange={onVoiceChange}
        onSearch={onSearch}
        updateInput={updateInput}
        voice={currentVoice}
        voices={voices}
      />
      <Conversation inputs={inputs} responses={responses} />
    </Context.Provider>
  );
});

Chat.propTypes = {
  dispatch: PropTypes.func,
  responses: PropTypes.array,
  voices: PropTypes.array
};

Chat.defaultProps = {
  dispatch: () => {},
  responses: [],
  voices: []
};

const mapStateToProps = state => state.chat;

export default connect(mapStateToProps)(Chat);
