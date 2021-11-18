import '../App.css'
import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../components/loginForm'
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

      <LoginForm></LoginForm>
    </div>
  )
}

export default search
