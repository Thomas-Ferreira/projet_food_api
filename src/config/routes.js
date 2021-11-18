import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom'

import Home from '../screens/home'
import Search from '../screens/search'
import Recette from '../screens/recette'
import Login from '../screens/login'

import GlobalStyle from './globalstyle'
import Header from '../components/header'
import {lightTheme, darkTheme} from './theme'
import { useState } from 'react'
import { ThemeProvider } from "styled-components";

const Routes = () => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme)
     const switchTheme = (theme) => {
        setCurrentTheme(theme)
     }
  return (
    <div>
      <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Router>
        <Header />
        <button onClick={() =>switchTheme(lightTheme)}> light Theme</button>
        <button onClick={() =>switchTheme(darkTheme)}> dark Theme</button>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/search'>
            <Search></Search>
          </Route>
          <Route path='/recette'>
            <Recette></Recette>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
        </Switch>
      </Router>
      </ThemeProvider>
    </div>
  )
}

export default Routes
