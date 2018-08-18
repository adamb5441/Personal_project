import React from 'react';
import {Switch , Route} from 'react-router-dom';
import Dashboard from './main_components/Dashboard';
import Login from './main_components/Login'
import Trips from './main_components/Trips'
import Plans from './sub_compoents/Plans'
import Calender from './sub_compoents/Calender'
import Maps from './sub_compoents/Maps'
export default (
        <Switch>
            <Route exact path='/' component={Login} />
            <Dashboard style={{backgroundColor: 'pink'}}>
                <Route path='/Dashboard/Trips' component={Trips} />
                <Route path='/Dashboard/Plans' component={Plans} />
                <Route path='/Dashboard/Calender' component={Calender} />
                <Route path='/Dashboard/Map' component={Maps} />
            </Dashboard>
        </Switch>)
