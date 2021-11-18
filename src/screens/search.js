import '../App.css'
import React from 'react'
import SearchByName from '../components/searchByName'
import SideBar from '../components/sidebar/sidebar'
import './styled.css'
import SerachByIngredients from '../components/searchByIngredients'

const search = () => {
  return (
    <div>
      <SideBar pageWrapId={'page-wrap'} outerContainerId={'App'} />
      <SearchByName></SearchByName>
      <SerachByIngredients></SerachByIngredients>
    </div>
  )
}
export default search
