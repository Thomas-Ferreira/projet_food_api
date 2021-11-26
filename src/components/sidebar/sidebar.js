import {useState} from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import {lightTheme, darkTheme} from '../../config/theme'


export default props => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme)
  const switchTheme = (theme) => {
     setCurrentTheme(theme)
  }
  return (
    // Pass on our props
    <Menu {...props}>
      <Link className='menu-item' to='/'>
        Acceuil
      </Link>
      <p></p>
      <Link className='menu-item' to='/login'>
        Connexion
      </Link>
      <p></p>
      <Link className='menu-item' to='/recette'>
        Recette
      </Link>
      <p></p>
      <Link className='menu-item' to='/search'>
        Recherche
      </Link>
      <p></p>
      <button onClick={() =>switchTheme(lightTheme)}> Theme Clair</button>
      <button onClick={() =>switchTheme(darkTheme)}> Theme Sombre</button>
    </Menu>
  )
}
