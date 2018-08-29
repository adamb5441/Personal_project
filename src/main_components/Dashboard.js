import React, { Component } from 'react';
import './../App.css';
import Header from './../sub_compoents/Header'
import Plans from './../sub_compoents/Plans'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateUserData} from './../ducks/users'
import './../styles/clear.css'
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
      <body style={{display: 'flex', flexDirection: 'column' }}>
          <Header />
          <div className="content">
            <div className="Info">  
              {this.props.children}
            </div>
          </div>

      </body>
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