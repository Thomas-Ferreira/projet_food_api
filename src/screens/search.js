import '../App.css'
import React from 'react'
import styled from 'styled-components'
import SearchByName from '../components/searchByName'
import './styled.css'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import i18n from '../config/translation'


const Search = () => {
  const history = useHistory()
  const [isSearch, setSearch] = useState(true)

  const isSearchName = () => {
    setSearch(true)
  }
  const isSearchIngredient = () => {
    setSearch(false)
    history.push('/searchbyingredient')
  }

  const {t, i18n } = useTranslation()

  return (
    <StyledDiv>
      <button onClick={isSearchName}>{t('search.name')}</button>
      <button onClick={isSearchIngredient}>{t('search.ingre')}</button>
      {isSearch ? (
        <SearchByName></SearchByName>
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

export default Search
