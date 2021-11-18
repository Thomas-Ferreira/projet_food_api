import '../App.css'
import React from 'react'
import styled from 'styled-components'
import SearchByName from '../components/searchByName'
import './styled.css'
import SearchByIngredients from '../components/searchByIngredients'
import { useState } from 'react'

const search = () => {
  const [test, setTest] = useState(false)

  const isSearchName = () => {
    setTest(true)
    console.log(test)
    return <SearchByName></SearchByName>
  }

  const isSearchIngredient = () => {
    return <SearchByIngredients></SearchByIngredients>
  }

  return (
    <div>
      <StyledButton onClick={isSearchName}>Search by name</StyledButton>
      <StyledButton onClick={isSearchIngredient}>
        Search by ingredient
      </StyledButton>
    </div>
  )
}

const StyledButton = styled.button`
  height: 30px;
  margin-bottom: 12px;
  border-radius: 4px;
  outline: none;
`

export default search
