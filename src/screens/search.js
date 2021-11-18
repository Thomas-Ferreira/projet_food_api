import '../App.css'
import React from 'react'
import SearchByName from '../components/searchByName'
import './styled.css'
import SerachByIngredients from '../components/searchByIngredients'

const search = () => {
  return (
    <div>
      <SearchByName></SearchByName>
      <SerachByIngredients></SerachByIngredients>
    </div>
  )
}
export default search
