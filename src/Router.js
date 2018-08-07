import React from 'react';
import {Switch , Route} from 'react-router-dom';
import Dashboard from './main_components/Dashboard';
import Login from './main_components/Login'
import Trips from './main_components/Trips'
import Plans from './sub_compoents/Plans'
export default (
        <Switch>
            <Route exact path='/' component={Login} />
            <Dashboard>
                <Route path='/Dashboard/Trips' component={Trips} />
                <Route path='/Dashboard/Plans' component={Plans} />
            </Dashboard>
        </Switch>)
