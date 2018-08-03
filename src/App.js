import React, { Component } from 'react';
import './App.css';
import Router from './Router'
import Dashboard from './main_components/Dashboard'
import Login from './main_components/Login'

class App extends Component {
  render() {
    return (
      <div>
      {Router}
      </div>
    );
  }
}

export default App;
