import '../App.css'
import React from 'react'
import styled from 'styled-components'
import SearchByName from '../components/searchByName'
import './styled.css'
import SearchByIngredients from '../components/searchByIngredients'
import { useState } from 'react'

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

  return (
    <StyledDiv>
      <button onClick={isSearchName}>Search by name</button>
      <button onClick={isSearchIngredient}>Search by ingredient</button>
      {isSearch ? (
        <SearchByName></SearchByName>
      ) : (
        <SearchByIngredients></SearchByIngredients>
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
