import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";

import React from 'react';

import Home from '../screens/home';

const Routes = () => {
    return(
    <div>
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
            </Switch>
        </Router>
    </div>
    )
}

export default Routes