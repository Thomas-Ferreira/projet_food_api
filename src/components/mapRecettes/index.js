import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { i18n } from 'i18next'

const MapRecettes = props => {
  const {t, i18n } = useTranslation()

  const [favorites, setFavorite] = useState(localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')): [])
  const [isFavorite, setIsFavorite] = useState(props.token)
  console.log(isFavorite)


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
    <RightBody>
      {props.api.map(item => (
        <div>
          <Lien href = {item.spoonacularSourceUrl} target="_blank" rel="noreferrer">
          <h2>{item.title}</h2>
          <Image src={item.image}></Image>
          </Lien>
          <button onClick={item.spoonacularSourceUrl}>{t('maprec.button')}</button>
          <button onClick={() => HandleFavorite(item)}>{isFavorite ?"remove from favorites" : "add to favorites"}</button>
          </div>
      ))}
      </RightBody>
  )
}

export default MapRecettes

const Lien = styled.a`
  text-decoration:none;
  color:#ffffff;
`

const Image = styled.img`
  width: 80%;
  border-radius: 30px;
  @media (min-width: 760px) {
  }
`

const RightBody = styled.div`
  background-color: #4fc337;
  border-radius: 30px;
  text-align: center;
  color: #ffffff;
  text-decoration:none;
  margin-bottom: 4vh;
`
