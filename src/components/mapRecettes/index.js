import React from 'react'
import { i18n } from 'i18next'
import { useTranslation } from 'react-i18next'

const MapRecettes = props => {
  const {t, i18n } = useTranslation()
  console.log(props)
  return (
    <div>
      {props.api.map(item => (
        <div>
          <h2>{item.title}</h2>
          <img src={item.image}></img>
          <button onClick={item.spoonacularSourceUrl}>{t('maprec.button')}</button>
        </div>
      ))}
    </div>
  )
}

export default MapRecettes
