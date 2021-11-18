import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import SideBar from '../components/sidebar/sidebar'
import './styled.css'

import allTheActions from '../actions'
import { Link } from 'react-router-dom'

const Home = () => {
  const dispatch = useDispatch()
  const apiResponce = useSelector(state =>
    state.api?.response?.data?.recipes ? state.api?.response?.data?.recipes : []
  )
  const apiError = useSelector(state => state.api.error)

  useEffect(() => {
    dispatch(allTheActions.api.getRandom())
    console.log({ apiResponce })
  }, [])

  return (
    <Homemenu>
      <div>
        <SideBar pageWrapId={'page-wrap'} outerContainerId={'App'} />
        <Link to='/search'> Search </Link>
        <Link to='/recette'> Recette </Link>
        <Link to='/login'> Login </Link>
        {apiResponce.map(item => (
          <div>
            {item.title}
            <img href={item.image}></img>
          </div>
        ))}
      </div>
    </Homemenu>
  )
}

export default Home

const Homemenu = styled.div`
  background-color: greenyellow;
`
