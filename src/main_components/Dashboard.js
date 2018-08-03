import React, { Component } from 'react';
import './../App.css';
import Header from './../sub_compoents/Header'
import Plans from './../sub_compoents/Plans'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateUserData} from './../ducks/users'
class Dashboard extends Component {

  componentDidMount(){
    axios.get('/api/user-data').then(res =>{

         this.props.updateUserData(res.data);
    })
}
  Logout() {
    axios.get('/api/logout').then(res => {
    this.props.history.push('/#');
    })
  }
  render() {
    let {user} = this.props
    return (
      <div>
        <h1>Account Information</h1>
        {user.name ? (
          <div>
            <p>Account Holder: {user.name}</p>
            <p>Account email: {user.email}</p>
            <p>Account number: {user.auth_id}</p>
            <img src={user.picture} alt="" />
            <a href="http://localhost:3005/api/logout"><button onClick={() => this.Logout}> </button></a>
          </div>
        ) : (
          <p>Please log in.</p>
        )}
          <Header />
          <Plans />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  { updateUserData }
)(Dashboard);