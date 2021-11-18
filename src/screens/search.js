import '../App.css'
import React from 'react'
import SearchByName from '../components/searchByName'
import SideBar from "../components/sidebar/sidebar";
import "./styled.css"


const search = () => {
  return (
    <div>
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <SearchByName></SearchByName>
    </div>
  )
}
export default search
