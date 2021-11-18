import '../App.css'
import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import allTheActions from '../actions'

const search = () => {
  const [recette, setRecette] = useState('')
  const dispatch = useDispatch()
  const apiRecette = useSelector(state =>
    state.api?.response?.data?.results ? state.api?.response?.data?.results : []
  )
  const apiError = useSelector(state => state.api.error)
  useEffect(() => {}, [recette])

  const onSubmit = e => {
    e.preventDefault()
    dispatch(allTheActions.api.getRecette(recette))
    console.log({ apiRecette })
  }

  return (
    <div>
      <Link to='/'> Home </Link>
      <Link to='/search'> Search </Link>
      <Link to='/recette'> Recette </Link>
      <Link to='/login'> Login </Link>

      <FormContainer>
        <StyledForm onSubmit={onSubmit}>
          <StyledInput
            value={recette}
            onChange={e => setRecette(e.target.value)}
            name='recette'
            type='text'
          ></StyledInput>
          <StyledInput type='submit'></StyledInput>
        </StyledForm>
      </FormContainer>
      {apiRecette.map(item => (
        <div>
          {item.title}
          {item.id}
        </div>
      ))}
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

export default search
