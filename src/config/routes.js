import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom'

import React from 'react'

import Home from '../screens/home'
import Search from '../screens/search'
import Recette from '../screens/recette'
import Login from '../screens/login'

import GlobalStyle from './globalstyle'

const Routes = () => {
  return (
    <div>
      <GlobalStyle/>
      <Router>
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
    </div>
  )
}

export default Routes
