import React from 'react'
import './App.css'
import Routes from './config/routes'
import { Provider } from 'react-redux'
import { store } from './config/store'
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <Provider store={store}>
      <Routes></Routes>
    </Provider>
  )
}

export default App
