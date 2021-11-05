import { API_SUCCESS, API_ERROR } from "../actions/api";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case API_SUCCESS:
      return {
        ...state,
        response: { ...action.response },
      };
    case API_ERROR:
      return {
        ...state,
        error: { ...action.error },
      };
    default:
      return state;
  }
};
