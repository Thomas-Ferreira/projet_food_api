import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import './styled.css'
import { render } from 'react-dom'
import { LoremIpsum } from 'react-lorem-ipsum'

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
        <Header>
          <h1>Welcome Home</h1>
        </Header>
        <Body>
          <LeftBody>
            <TextBody className='text-wrapper'>
              <h2>Projet Recette</h2>
              <p>(titre temporaire)</p>
              <LoremIpsum p={1} />
            </TextBody>
          </LeftBody>
          <RightBody>
            {apiResponce.map(item => (
              <div>
                <h2> Recette du jour : </h2>
                <h3>{item.title}</h3>
                <Image src={item.image}></Image>
              </div>
            ))}
          </RightBody>
        </Body>
      </div>
    </Homemenu>
  )
}

export default Home

const Header = styled.div`
  text-align: center;
  @media (min-width: 760px) {
    display: grid;
  }
`

const Body = styled.div`
  padding: 12px;
  @media (min-width: 760px) {
    display: flex;
  }
`

const TextBody = styled.div`
  text-align: left;
`

const RightBody = styled.div`
  background-color: green;
  padding-right: 5%;
  border-radius: 30px;
  text-align: center;
  @media (min-width: 760px) {
    justify-content: flex-end;
    display: flex;
    flex: 1;
    width: 50%;
  }
`

const LeftBody = styled.div`
  padding-left: 12px;
  @media (min-width: 760px) {
    justify-content: flex-end;
    display: flex;
    flex: 1;
    width: 50%;
  }
`

const Homemenu = styled.div`
  background-color: white;
  background-repeat: no-repeat;
  background-size: cover;
`

const Image = styled.img`
  width: 100px;
  height: 100px;
  @media (min-width: 760px) {
    width: 200px;
    height: 200px;
  }
`
