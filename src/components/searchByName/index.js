import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import allTheActions from '../../actions'

const SearchByName = () => {
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
        <form onSubmit={onSubmit}>
          <input
            value={recette}
            onChange={e => setRecette(e.target.value)}
            name='recette'
            type='text'
          ></input>
          <input type='submit'></input>
        </form>
      </FormContainer>
      {apiRecette.map(item => (
        <div>
          <h2>{item.title}</h2>
          <img src={item.image}></img>
        </div>
      ))}
    </div>
  )
}

const FormContainer = styled.div`
  margin-top: 10%;
  padding: 12px;
`

export default SearchByName
