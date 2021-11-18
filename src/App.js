<<<<<<< Updated upstream
import React from 'react';
import './App.css';
import Routes from './config/routes';

function App() {
  return (
    <div className="App">
      <Routes></Routes>
    </div>
=======
import React from "react";
import "./App.css";
import Routes from "./config/routes";
import { Provider } from "react-redux";
import { store } from "./config/store";
import styled from "styled-components";

function App() {
  return (
    <Main>
    <Provider store={store}>
      <Routes></Routes>
    </Provider>
    </Main>
>>>>>>> Stashed changes
  );
}

export default App;

const Main = styled.div`
`