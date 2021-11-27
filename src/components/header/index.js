import React from 'react'
import SideBar from '../sidebar/sidebar'
import styled from 'styled-components'
import { i18n } from 'i18next'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const {t, i18n } = useTranslation()
  return (
    <DivHeader>
      <navBar>
        <SideBar pageWrapId={'page-wrap'} outerContainerId={'App'} />
      </navBar>
      <StyledH1>{t('header.head')}</StyledH1>
    </DivHeader>
  )
}

export default Header

const DivHeader = styled.header`
  margin-top: 0;
  width: 100%;
  text-color: black;
  text-decoration: none;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  height: 80px;
  width: 100%;
  background-color: green;
  color: #ffffff;
`

const StyledH1 = styled.h1`
  font-size: 20px;
  text-align: center;
`
