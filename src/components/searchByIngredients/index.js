import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import allTheActions from '../../actions'
import { i18n } from 'i18next'
import { useTranslation } from 'react-i18next'
import MapRecettes from '../mapRecettes'

const SearchByIngredients = () => {
  const [ingredient, setIngredient] = useState('')
  const [ingredientsList, setIngredientsList] = useState([])
  const [param, setParam] = useState('')
  const dispatch = useDispatch()
  const {t, i18n } = useTranslation()
  const [isFavorite,setIsFavorite]=useState(false)

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

  useEffect(() => {}, [ingredientsList])

  const onSubmit = e => {
    e.preventDefault()
    dispatch(allTheActions.api.getRecetteByIngredients(param))
    setParam('')
    setIngredientsList([])
  }

  return (
    <div>
      <FormContainer>
        <input
          value={ingredient}
          onChange={e => setIngredient(e.target.value)}
        ></input>
        <button onClick={addIngredient}>{t('searchbying.add')}</button>
        <form onSubmit={onSubmit}>
          <input type='submit'></input>
        </form>
      </FormContainer>
      <h2>Vos ingrédients</h2>
      {ingredientsList.map(ingredient => (
        <li>{ingredient.label}</li>
      ))}
      <div>
        <MapRecettes api={apiRecettes} token={isFavorite}></MapRecettes>
      </div>
    </div>
  )
}

const FormContainer = styled.div`
  margin-top: 10vh;
  padding: 12px;
`

export default SearchByIngredients
