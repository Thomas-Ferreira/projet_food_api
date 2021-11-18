import axios from 'axios'
import { useParams } from 'react-router'

export const API_SUCCESS = 'API_SUCCESS'
export const API_ERROR = 'API_ERROR'

// Thunk function
export const getRandom = () => dispatch => {
  axios({
    method: 'GET',
    url: `https://api.spoonacular.com/recipes/random`,
    params: {
      apiKey: 'c275f175c9fd48669b66b8d29fd368ed',
      number: 1
    }
  })
    .then(response => {
      console.log(response)
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
      apiKey: 'c275f175c9fd48669b66b8d29fd368ed',
      query: params,
      number: 10
    }
  })
    .then(response => {
      console.log(response)
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
      apiKey: 'c275f175c9fd48669b66b8d29fd368ed',
      ingredients: params,
      number: 10
    }
  })
    .then(response => {
      console.log(response)
      dispatch({ type: API_SUCCESS, response: response })
    })
    .catch(error => {
      dispatch({ type: API_ERROR, error: error })
    })
}
