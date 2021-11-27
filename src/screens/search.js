import '../App.css'
import React from 'react'
import styled from 'styled-components'
import SearchByName from '../components/searchByName'
import './styled.css'
import SearchByIngredients from '../components/searchByIngredients'
import { useState } from 'react'
import i18n from '../config/translation'
import { useTranslation } from 'react-i18next'


const Search = () => {
  const [isSearch, setSearch] = useState(true)

  const isSearchName = () => {
    setSearch(true)
    console.log(isSearch)
  }
  const isSearchIngredient = () => {
    setSearch(false)
    console.log(isSearch)
  }

  const {t, i18n } = useTranslation()

  return (
    <StyledDiv>
      <button onClick={isSearchName}>{t('search.name')}</button>
      <button onClick={isSearchIngredient}>{t('search.ingre')}</button>
      {isSearch ? (
        <SearchByName></SearchByName>
      ) : (
        <SearchByIngredients></SearchByIngredients>
      )}
      <button onClick={() => i18n.changeLanguage('fr')}>FR</button>
      <button onClick={() => i18n.changeLanguage('en')}>EN</button>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  margin-top: 20vh;
  padding: 12px;
  text-align: center;
`

export default Search
