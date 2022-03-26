import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Sidebar from '@Components/Sidebar/Sidebar';

import VisibilityToggle from '@Pages/VisibilityToggle/VisibilityToggle';
import CounterApp from '@Pages/CounterApp/CounterApp';
import RandomNumberGenerator from '@Pages/RandomNumberGenerator/RandomNumberGenerator';
import RomanToDecimalConverter from '@Pages/RomanToDecimal/RomanToDecimal';
import RandomMealGenerator from '@Pages/RandomMealGenerator/RandomMealGenerator';

import NotFoundPage from '@Pages/NotFoundPage';

const routes = (
    <Router>
        <div>
            <Sidebar />
            <Switch>
                <Route path="/" exact={true} />
                <Route path="/VisibilityToggle" component={VisibilityToggle} />
                <Route path="/CounterApp" component={CounterApp} />
                <Route path="/RandomNumberGenerator" component={RandomNumberGenerator} />
                <Route path="/RomanToDecimalConverter" component={RomanToDecimalConverter} />
                <Route path="/RandomMealGenerator" component={RandomMealGenerator} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default routes;