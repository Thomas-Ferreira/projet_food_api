import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom';


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