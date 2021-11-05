import '../App.css';
import logo from '../logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';

const search = () => {
    return (
        <div>
            <Link to="/"> Home </Link>
            <Link to="/search"> Search </Link>
            <Link to="/recette"> Recette </Link>
            <Link to="/login"> Login </Link>
            
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    );
};

export default search;