import axios from "axios";

export const API_SUCCESS = "API_SUCCESS";
export const API_ERROR = "API_ERROR";

// Thunk function
export const getRandom = () => (dispatch) => {
  axios
    .get(
      "https://api.spoonacular.com/recipes/random?apiKey=c275f175c9fd48669b66b8d29fd368ed&number=1"
    )
    .then((response) => {
      console.log(response);
      dispatch({ type: API_SUCCESS, response: response });
    })
    .catch((error) => {
      dispatch({ type: API_ERROR, error: error });
    });
};
