import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: greenyellow;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  button{
    height: 30px;
    margin-bottom: 12px;
    border-radius: 4px;
    outline: none;
  }
  input{
    height: 30px;
    margin-bottom: 12px;
    border-radius: 4px;
    outline: none;
  }
  form{
    display: flex;
    flex-direction: column;
  }
`

export default GlobalStyle
