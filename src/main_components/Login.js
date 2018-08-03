import React, { Component } from 'react';
import Header from './../sub_compoents/Header'
import Plans from './../sub_compoents/Plans'
import {Link} from 'react-router-dom'
require('dotenv').config();
class Login extends Component {
    login(){
        let {REACT_APP_DOMAIN, REACT_APP_CLIENT_ID} = process.env

        let url = `${window.location.origin}/auth/callback`;
        
        window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`
    }
  render() {
    return (
      <div>
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}

export default Login;