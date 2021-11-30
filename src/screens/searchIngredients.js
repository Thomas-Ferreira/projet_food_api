import '../App.css'
import React from 'react'
import styled from 'styled-components'
import './styled.css'
import SearchByIngredients from '../components/searchByIngredients'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'



const SearchIngredient = () => {
  const history = useHistory()
  const [isSearch, setSearch] = useState(true)

  const isSearchName = () => {
    setSearch(true)
    history.push('/search')
  }
  const isSearchIngredient = () => {
    setSearch(false)
  }

  const {t, i18n } = useTranslation()

  return (
    <StyledDiv>
      <button onClick={isSearchName}>{t('search.name')}</button>
      <button onClick={isSearchIngredient}>{t('search.ingre')}</button>
      {isSearch ? (
        <SearchByIngredients></SearchByIngredients>
      ) : (
        []
      )}
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  margin-top: 20vh;
  padding: 12px;
  text-align: center;
`

export default SearchIngredient
