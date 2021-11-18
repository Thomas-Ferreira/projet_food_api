import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import allTheActions from '../../actions'

const SearchByIngredients = () => {
  const [ingredient, setIngredient] = useState('')
  const [ingredientsList, setIngredientsList] = useState('')
  const dispatch = useDispatch()

  const addIngredient = () => {
    if (ingredientsList === '') {
      setIngredientsList(`${ingredient}`)
    } else {
      setIngredientsList(`${ingredientsList},+${ingredient}`)
    }
  }

  const apiRecettes = useSelector(state =>
    state.api?.response?.data ? state.api?.response?.data : []
  )
  const apiError = useSelector(state => state.api.error)
  useEffect(() => {
    console.log(ingredientsList)
  }, [ingredientsList])

  const onSubmit = e => {
    e.preventDefault()
    dispatch(allTheActions.api.getRecetteByIngredients(ingredientsList))
    console.log({ apiRecettes })
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
      <div>
        {apiRecettes.map(item => (
          <div>
            <h2>{item.title}</h2>
            <img src={item.image}></img>
            <button onClick={item.spoonacularSourceUrl}>voir la recette</button>
          </div>
        ))}
      </div>
    </div>
  )
}

const FormContainer = styled.div`
  margin-top: auto;
  padding: 12px;
`

export default SearchByIngredients
