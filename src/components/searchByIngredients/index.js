import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import allTheActions from '../../actions'

const SerachByIngredients = () => {
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
        <StyledInput
          value={ingredient}
          onChange={e => setIngredient(e.target.value)}
        ></StyledInput>
        <StyledButton onClick={addIngredient}>add to list</StyledButton>
        <StyledForm onSubmit={onSubmit}>
          <StyledInput type='submit'></StyledInput>
        </StyledForm>
      </FormContainer>
      <div>
        {apiRecettes.map(item => (
          <div>
            {item.title}
            {item.id}
          </div>
        ))}
      </div>
    </div>
  )
}

const FormContainer = styled.div`
  padding: 12px;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

const StyledInput = styled.input`
  height: 30px;
  margin-bottom: 12px;
  border-radius: 4px;
  outline: none;
`

const StyledButton = styled.button`
  height: 30px;
  margin-bottom: 12px;
  border-radius: 4px;
  outline: none;
`

export default SerachByIngredients
