import {useState} from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import {lightTheme, darkTheme} from '../../config/theme'
import { i18n } from 'i18next'
import { useTranslation } from 'react-i18next'

export default props => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme)
  const switchTheme = (theme) => {
     setCurrentTheme(theme)
  }
  const {t, i18n } = useTranslation()
  return (
    // Pass on our props
    <Menu {...props}>
      <Link className='menu-item' to='/'>
        {t('sidebar.home')}
      </Link>
      <p></p>
      <Link className='menu-item' to='/login'>
        {t('sidebar.log')}
      </Link>
      <p></p>
      <Link className='menu-item' to='/recette'>
        {t('sidebar.rec')}
      </Link>
      <p></p>
      <Link className='menu-item' to='/search'>
        {t('sidebar.search')}
      </Link>
      <p></p>
      <button onClick={() =>switchTheme(lightTheme)}> Theme Clair</button>
      <button onClick={() =>switchTheme(darkTheme)}> Theme Sombre</button>
      <button onClick={() => i18n.changeLanguage('fr')}>FR</button>
      <button onClick={() => i18n.changeLanguage('en')}>EN</button>
    </Menu>
  )
}
