import '../App.css'
import React from 'react'
import LoginForm from '../components/loginForm'
import i18n from 'i18next'

const search = () => {
  return (
    <div>
      <p>{i18n.t('menu')}</p>
      <LoginForm></LoginForm>
    </div>
  )
}

export default search
