import { API_SUCCESS, API_ERROR, API_SUCCESS_SEARCH } from '../actions/api'

const initialState = {
  response: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case API_SUCCESS:
      return {
        ...state,
        response: { ...action.response }
      }
    case API_SUCCESS_SEARCH:
      return {
        ...state,
        response: { ...action.response }
      }
    case API_ERROR:
      return {
        ...state,
        error: { ...action.error }
      }
    default:
      return state
  }
}
