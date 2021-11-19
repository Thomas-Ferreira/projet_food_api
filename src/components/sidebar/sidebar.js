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
        Home
      </Link>
      <p></p>
      <Link className='menu-item' to='/login'>
        Login
      </Link>
      <p></p>
      <Link className='menu-item' to='/recette'>
        Recette
      </Link>
      <p></p>
      <Link className='menu-item' to='/search'>
        Search
      </Link>
      <p></p>
      <button onClick={() =>switchTheme(lightTheme)}> light Theme</button>
      <button onClick={() =>switchTheme(darkTheme)}> dark Theme</button>
    </Menu>
  )
}
