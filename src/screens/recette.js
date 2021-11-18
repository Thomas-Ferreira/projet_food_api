import '../App.css'
import logo from '../logo.svg'
import React from 'react'
import { Link } from 'react-router-dom'
import SideBar from "../components/sidebar/sidebar";
import "./styled.css"


const search = () => {
  return (
    <div>
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <Link to='/'> Home </Link>
      <Link to='/search'> Search </Link>
      <Link to='/recette'> Recette </Link>
      <Link to='/login'> Login </Link>

      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
    </div>
  )
}

export default search
