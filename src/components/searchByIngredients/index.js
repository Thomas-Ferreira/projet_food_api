import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import allTheActions from '../../actions'
import { i18n } from 'i18next'
import { useTranslation } from 'react-i18next'

const SearchByIngredients = () => {
  const [ingredient, setIngredient] = useState('')
  const [ingredientsList, setIngredientsList] = useState([])
  const [param, setParam] = useState('')
  const dispatch = useDispatch()
  const {t, i18n } = useTranslation()

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
    state.api.response ? state.api.response : []
  )
  console.log(apiRecettes)
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
      {apiRecettes.map(item => (
        <div>
          <h2>{item.title}</h2>
          <img src={item.image}></img>
          <button onClick={item.spoonacularSourceUrl}>{t('searchbying.see')}</button>
        </div>
      ))}
    </div>
  )
}

const FormContainer = styled.div`
  margin-top: 20vh;
  padding: 12px;
`

export default SearchByIngredients
