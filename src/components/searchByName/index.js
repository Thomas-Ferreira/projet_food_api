import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import allTheActions from '../../actions'
import MapRecettes from '../mapRecettes'

const SearchByName = () => {
  const [recette, setRecette] = useState('')
  const dispatch = useDispatch()
  const [isFavorite,setIsFavorite]=useState(false)
  const apiRecette = useSelector(state =>
    state.api?.response?.data?.results ? state.api?.response?.data?.results : []
  )
  const apiError = useSelector(state => state.api.error)
  useEffect(() => {}, [recette])

  const onSubmit = e => {
    e.preventDefault()
    dispatch(allTheActions.api.getRecette(recette))
  }

  return (
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
      <MapRecettes api={apiRecette} token={isFavorite}></MapRecettes>
    </FormContainer>
  )
}

const FormContainer = styled.div`
  margin-top: 10vh;
  padding: 12px;
`

export default SearchByName
