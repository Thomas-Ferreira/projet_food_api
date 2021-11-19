import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import allTheActions from '../../actions'

const SearchByIngredients = () => {
  const [ingredient, setIngredient] = useState('')
  const [ingredientsList, setIngredientsList] = useState([])
  const [param, setParam] = useState('')
  const dispatch = useDispatch()

  const addIngredient = () => {
    setIngredientsList([...ingredientsList, { label: ingredient }])
    if (param === '') {
      setParam(`${ingredient}`)
    } else {
      setParam(`${param},+${ingredient}`)
    }
    setIngredient('') //LA TABLEAU
  }

  const apiRecettes = useSelector(state =>
    state.api?.response?.data ? state.api?.response?.data : []
  )
  const apiError = useSelector(state => state.api.error)
  useEffect(() => {
    console.log(ingredientsList)
    dispatch(allTheActions.api.getRecetteByIngredients([]))
  }, [ingredientsList])

  const onSubmit = e => {
    e.preventDefault()
    dispatch(allTheActions.api.getRecetteByIngredients(param))
    console.log({ apiRecettes })
    setParam('')
  }

  const display = apiResponse => {
    if (apiResponse !== '') {
      return apiResponse.map(item => (
        <div>
          <h2>{item.title}</h2>
          <img src={item.image}></img>
          <button onClick={item.spoonacularSourceUrl}>voir la recette</button>
        </div>
      ))
    }
  }

  return (
    <div>
      <FormContainer>
        <input
          value={ingredient}
          onChange={e => setIngredient(e.target.value)}
        ></input>
        <button onClick={addIngredient}>add to list</button>
        <form onSubmit={onSubmit}>
          <input type='submit'></input>
        </form>
      </FormContainer>
      <h2>Vos ingrédients</h2>
      {ingredientsList.map(ingredient => (
        <li>{ingredient.label}</li>
      ))}
      <div>{display(apiRecettes)}</div>
    </div>
  )
}

const FormContainer = styled.div`
  margin-top: auto;
  padding: 12px;
`

export default SearchByIngredients
