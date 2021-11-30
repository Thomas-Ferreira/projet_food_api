import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Home from '../screens/home'
import Search from '../screens/search'
import Recette from '../screens/recette'
import Login from '../screens/login'


import GlobalStyle from './globalstyle'
import Header from '../components/header'
import { lightTheme, darkTheme } from './theme'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import SearchIngredient from '../screens/searchIngredients'
import styled from 'styled-components'

const Routes = () => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme)
  const switchTheme = theme => {
    setCurrentTheme(theme)
  }
  return (
    <div>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <Router>
          <Header />
          <Theme>
          <button onClick={() =>switchTheme(lightTheme)}> light Theme</button>
          <button onClick={() =>switchTheme(darkTheme)}> dark Theme</button>
          </Theme>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/search'>
              <Search></Search>
            </Route>
            <Route path='/searchbyingredient'>
              <SearchIngredient></SearchIngredient>
            </Route>
            <PrivateRoute path='/recette'>
              <Recette></Recette>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  )
}


function PrivateRoute({ children, ...rest }) {
  const isToken = localStorage.getItem('token')
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isToken ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}

export default Routes


const Theme = styled.div`
  padding-top: 10vh;
`