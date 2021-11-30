import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import './styled.css'
import { useTranslation } from 'react-i18next'
import i18n from '../config/translation'

import allTheActions from '../actions'
import MapRecettes from '../components/mapRecettes'

const Home = () => {
  const dispatch = useDispatch()
  const apiResponce = useSelector(state =>
    state.api?.response?.data?.recipes ? state.api?.response?.data?.recipes : []
  )
  const apiError = useSelector(state => state.api.error)

  useEffect(() => {
    dispatch(allTheActions.api.getRandom())
  }, [])

  const {t, i18n } = useTranslation()

  return (
    <Homemenu>
      <div>
        <Body>
          <LeftBody>
            <TextBody className='text-wrapper'>
            {apiResponce.map(item => (
              <div>
              <h1>{t('home.desc')}</h1>
              <div dangerouslySetInnerHTML={{__html: item.summary}} />
              </div>
              ))}
            </TextBody>
          </LeftBody>
          <RightBody>
            <MapRecettes api={apiResponce}></MapRecettes>
          </RightBody>
        </Body>
      </div>
    </Homemenu>
  )
}

export default Home

const Body = styled.div`
  padding: 12px;
  background: #ffffff;
  @media (min-width: 760px) {
    display: flex;
  }
`


const TextBody = styled.div`
  text-align: left;
`

const LeftBody = styled.div`
  padding-left: 12px;
  justify-content: center;
  @media (min-width: 760px) {
    justify-content: flex-end;
    display: flex;
    flex: 1;
    width: 50%;
  }
`

const Homemenu = styled.div`
  padding-top: 80px;
  background-color: white;
  background-repeat: no-repeat;
  background-size: cover;
`

const RightBody = styled.div`
@media (min-width: 760px) {
  justify-content: flex-end;
  display: flex;
  flex: 1;
  width: 50%;
  align-content: center;
  flex-wrap: nowrap;
  align-items: center;
}
`