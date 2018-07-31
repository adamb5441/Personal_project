import React, { Component } from 'react';
import './../App.css';
import Header from './../sub_compoents/Header'
import Plans from './../sub_compoents/Plans'
class Dashboard extends Component {
  render() {
    return (
      <div>
          <Header />
          <Plans />
      </div>
    );
  }
}

export default Dashboard;