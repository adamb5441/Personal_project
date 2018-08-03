import React from 'react';
import {Switch , Route} from 'react-router-dom';
import Dashboard from './main_components/Dashboard';
import Login from './main_components/Login'
export default (
        <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/Dashboard' component={Dashboard} />
        </Switch>

)