import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'

export default props => {
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
    </Menu>
  )
}
