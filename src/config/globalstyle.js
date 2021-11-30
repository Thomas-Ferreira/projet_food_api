import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Roboto';
  font-weight: normal;
  font-style: normal;
};
@font-face {
  font-family: 'Roboto';
  font-weight: bold;
  font-style: normal;
};
body{
  background-color: white;
}
p{
  font-family: 'Roboto';
  color: #222222;
}

button{
  height: 30px;
  color: #FFFFFF;
  background: green;
  border-color: #FFFFFF;
  align:right;
  border-style: solid;border-width: 1px 1px 1px 1px;
  padding: 11px 30px 11px 30px;
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
