import React, { Component } from 'react';
import './../App.css';
import Header from './../sub_compoents/Header'
import Plans from './../sub_compoents/Plans'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateUserData} from './../ducks/users'
import Nav from './../sub_compoents/Nav'
import './../styles/Dashboard.css'
class Dashboard extends Component {

  componentDidMount(){
    axios.get('/api/user-data').then(res =>{

         this.props.updateUserData(res.data);
    })
}

  render() {
    let {user} = this.props
    return (
      <div style={{display: 'flex', flexDirection: 'column' }}>
          <Header />
          <div className="content">
            <Nav />
            <div className="Info">  
              {this.props.children}
            </div>
          </div>

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