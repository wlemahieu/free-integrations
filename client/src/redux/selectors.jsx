export const getResponsesState = store => store.responses;

export const getResponses = store =>
  getResponsesState(store) ? getResponsesState(store).responses : [];
