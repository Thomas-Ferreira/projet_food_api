import React, { useEffect, useState } from 'react'
import { i18n } from 'i18next'
import { useTranslation } from 'react-i18next'

const MapRecettes = props => {
  const {t, i18n } = useTranslation()

  const [favorites, setFavorite] = useState(localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')): [])
  const [isFavorite, setIsFavorite] = useState(false)

  console.log(favorites)

const removeFavorite = (id) =>{
      const newFavorite = favorites.filter(fav => fav.id !== Number(id))
      localStorage.setItem('favorites', JSON.stringify([newFavorite]))
      setFavorite(newFavorite)
  }

  const addFavorite = (element) => {
      localStorage.setItem('favorites', JSON.stringify([...favorites, element]))
      setFavorite([...favorites, element])
  }

  const HandleFavorite = (element) => {
      isFavorite ? removeFavorite(element.id) : addFavorite(element)
  }
  return (
    <div>
      {props.api.map(item => (
        <div>
          <h2>{item.title}</h2>
          <img src={item.image}></img>
          <button onClick={item.spoonacularSourceUrl}>{t('maprec.button')}</button>
          <button onClick={() => HandleFavorite(item)}>{isFavorite ?"remove from favorites" : "add to favorites"}</button>
        </div>
      ))}
    </div>
  )
}

export default MapRecettes
