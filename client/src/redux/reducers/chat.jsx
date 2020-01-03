import * as types from '../actionTypes';

const initialState = {
	input: '',
	inputs: [],
	responses: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.SAVE_AI_RESPONSE: {
      return {
        ...state,
				responses: [...state.responses, action.payload]
      };
    }
		case types.SAVE_USER_INPUT: {
      return {
        ...state,
				inputs: [...state.inputs, action.payload.input]
      };
    }
		case types.SAVE_USER_KEY: {
      return {
        ...state,
				input: action.payload
      };
    }
    default:
      return state;
  }
}
