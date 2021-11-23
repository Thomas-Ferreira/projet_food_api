import React from 'react'
import SideBar from '../sidebar/sidebar'
import styled from 'styled-components'

const header = () => {
  return (
    <DivHeader>
      <navBar>
        <SideBar pageWrapId={'page-wrap'} outerContainerId={'App'} />
      </navBar>
      <StyledH1>Welcome Home</StyledH1>
    </DivHeader>
  )
}

export default header

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
