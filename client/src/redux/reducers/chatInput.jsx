import { USER_INPUT } from '../actionTypes';

const initialState = {
	inputs: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_INPUT: {
      return {
        ...state,
				inputs: [...state.inputs, action.input]
      };
    }
    default:
      return state;
  }
}
