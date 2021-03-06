import '../App.css'
import React from 'react'
import LoginForm from '../components/loginForm'
import { useTranslation } from 'react-i18next'
import i18n from '../config/translation'

const Login = () => {
  const {t, i18n } = useTranslation()
  return (
    <div>
      <LoginForm></LoginForm>
    </div>
  )
}

export default Login
