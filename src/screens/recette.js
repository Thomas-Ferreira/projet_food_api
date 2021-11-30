import '../App.css'
import React, { useState } from 'react'
import "./styled.css"
import MapRecettes from '../components/mapRecettes'
import i18n from '../config/translation'


const Recette = () => {
  const [isFavorite,setIsFavorite]=useState(true)
  const localStorageFavorite = localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : []
  const [favorites, setFavorites] = useState(localStorageFavorite)
  return (
    <MapRecettes api={favorites} token={isFavorite}></MapRecettes>
  )
}

export default Recette