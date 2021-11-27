import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'

const ressources = {
  fr: {
      translation:{
      menu: 'Menu'
    }
  },
  en: {
    translation:{
      menu: 'Menu en Anglais'
    }
  }
}


i18n.use(initReactI18next).init({
  lng: 'fr',
  fallbackLng: 'eng',
  ressources,

  interpolation:{
    escapeValue: false
  }
})

export default i18n