<<<<<<< Updated upstream
import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom';
=======
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components"

import "./styled.css"
import SideBar from "../components/sidebar/sidebar";

>>>>>>> Stashed changes


<<<<<<< Updated upstream
const home = () => {
    return (
        <div className="App">
             <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/search"> Search </Link>
        <Link to="/recette"> Recette </Link>
        <Link to="/login"> Login </Link>
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        </div>
    );
};

export default home;
=======
const Home = () => {
  const dispatch = useDispatch();
  const apiResponce = useSelector((state) =>
    state.api?.response?.data?.recipes ? state.api?.response?.data?.recipes : []
  );
  const apiError = useSelector((state) => state.api.error);

  useEffect(() => {
    dispatch(allTheActions.api.getRandom());
    console.log({ apiResponce });
  }, []);

  return (
  <Homemenu>
    <div>
    <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <Link to="/search"> Search </Link>
      <Link to="/recette"> Recette </Link>
      <Link to="/login"> Login </Link>
      {apiResponce.map((item) => (
        <div>{item.title}
          <img href={item.image}></img>
        </div>
      ))}
    </div>
  </Homemenu>
  );
};

export default Home;

const Homemenu = styled.div`
  background-color: greenyellow;
`
>>>>>>> Stashed changes
