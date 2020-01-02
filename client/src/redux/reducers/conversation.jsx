import { AI_RESPONSE } from '../actionTypes';

const initialState = {
	responses: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AI_RESPONSE: {
      return {
        ...state,
				responses: [...state.responses, action.response]
      };
    }
    default:
      return state;
  }
}
