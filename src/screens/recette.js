import '../App.css'
import logo from '../logo.svg'
import React, { useState } from 'react'
import "./styled.css"
import MapRecettes from '../components/mapRecettes'


const Recette = () => {
  const localStorageFavorite = localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : []
    const [favorites, setFavorites] = useState(localStorageFavorite)
    console.log(favorites)
  return (
    <MapRecettes api={favorites}></MapRecettes>
  )
}

export default Recette