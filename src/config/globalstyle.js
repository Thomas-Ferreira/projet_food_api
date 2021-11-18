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
    background-color: #ffffff;
}
p{
    font-family: 'Roboto';
    color: #222222;
}
`

export default GlobalStyle