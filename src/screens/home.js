import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import './styled.css'
import { render } from 'react-dom';
import { LoremIpsum } from 'react-lorem-ipsum';


import allTheActions from '../actions'

const Home = () => {
  const dispatch = useDispatch()
  const apiResponce = useSelector(state =>
    state.api?.response?.data?.recipes ? state.api?.response?.data?.recipes : []
  )
  const apiError = useSelector(state => state.api.error)

  /*useEffect(() => {
    dispatch(allTheActions.api.getRandom())
    console.log({ apiResponce })
  }, [])*/

  return (
    <Homemenu>
      <div>
      <Header>
        <h1>Welcome Home</h1>
        {/*apiResponce.map(item => (
          <div>
            <h2> Recette du jour : </h2>
            {item.title}

            <Image src={item.image}></Image
          </div>
        ))*/}
      </Header>
      <Body>
      <LeftBody>
      <TextBody className="text-wrapper">
        <h1>Nom Recette du Jour</h1> {/*Call recette*/}
        <LoremIpsum p={2} />
      </TextBody>
      </LeftBody>
      <RightBody>
        <img src="../logo-simple-framed-green-gradient.ico"></img>
      </RightBody>
      </Body>
      </div>
    </Homemenu>
  )
}

export default Home

const Header = styled.div`
display: grid;
text-align: center;
`

const Body = styled.div`
display: flex;
padding:12px;
`

const TextBody = styled.div`
text-align: left;
`

const RightBody = styled.div`
  justify-content:flex-end;
  background-color: green;
  display: flex ;
  flex: 1;
  padding-right: 5%;
`

const LeftBody = styled.div`
  background-color: green;
  display: flex;
  flex:2;
  padding-left: 12px;
`

const Homemenu = styled.div`
  background-color: white;
  background-repeat: no-repeat;
  background-size:cover;
`
