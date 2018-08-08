import React, { Component } from 'react';
import './../App.css';
import Header from './../sub_compoents/Header'
import Plans from './../sub_compoents/Plans'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateUserData} from './../ducks/users'
import {Link} from 'react-router-dom'
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
          <Header />
          <Link to='/Dashboard/Trips'>Trips</Link>
          <Link to='/Dashboard/Plans'>Plans</Link>
          {this.props.children}

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