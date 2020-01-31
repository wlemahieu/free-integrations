import * as types from 'redux/actionTypes';

const initialState = {
  responses: [],
  error: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
  case types.SAVE_AI_RESPONSE: {
    return {
      ...state,
      responses: [...state.responses, action.payload]
    };
  }
  case types.SAVE_AI_ERROR: {
    return {
      ...state,
      error: action.payload
    };
  }
  case types.LOCATION_CHANGE: {
    return initialState;
  }
  default:
    return state;
  }
}
