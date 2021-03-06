import axios from 'axios'

export const API_SUCCESS = 'API_SUCCESS'
export const API_ERROR = 'API_ERROR'
export const API_SUCCESS_SEARCH = 'API_SUCCESS_SEARCH'

// Thunk function
export const getRandom = () => dispatch => {
  axios({
    method: 'GET',
    url: `https://api.spoonacular.com/recipes/random`,
    params: {
      apiKey: '62bfcedd460e49c787df6ec46585ec7b',
      number: 1
    }
  })
    .then(response => {
      dispatch({ type: API_SUCCESS, response: response })
    })
    .catch(error => {
      dispatch({ type: API_ERROR, error: error })
    })
}

export const getRecette = params => dispatch => {
  axios({
    method: 'GET',
    url: `https://api.spoonacular.com/recipes/complexSearch`,
    params: {
      apiKey: '62bfcedd460e49c787df6ec46585ec7b',
      query: params,
      number: 10
    }
  })
    .then(response => {
      dispatch({ type: API_SUCCESS, response: response })
    })
    .catch(error => {
      dispatch({ type: API_ERROR, error: error })
    })
}

export const getRecetteByIngredients = params => dispatch => {
  axios({
    method: 'GET',
    url: `https://api.spoonacular.com/recipes/findByIngredients`,
    params: {
      apiKey: '62bfcedd460e49c787df6ec46585ec7b',
      ingredients: params,
      number: 10
    }
  })
    .then(response => {
      dispatch({ type: API_SUCCESS, response: response })
    })
    .catch(error => {
      dispatch({ type: API_ERROR, error: error })
    })
}
