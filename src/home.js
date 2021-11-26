import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import './styled.css'

import allTheActions from '../actions'

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
        <p>Bienvenu à l'Acceuil</p>
        {apiResponce.map(item => (
          <div>
            {item.title}
            <img src={item.image}></img>
          </div>
        ))}
      </div>
    </Homemenu>
  )
}

export default Home

const Homemenu = styled.div`
  background-color: greenyellow;
  text-align: center;
`
