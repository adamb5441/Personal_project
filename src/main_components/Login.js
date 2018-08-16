import React, { Component } from 'react';
import Header from './../sub_compoents/Header'
import Plans from './../sub_compoents/Plans'
import {Link} from 'react-router-dom'
import './../styles/Login.css'
import tree from './../images/palm-tree.png'

class Login extends Component {
    login(){
        let {REACT_APP_DOMAIN, REACT_APP_CLIENT_ID} = process.env

        let url = `${window.location.origin}/auth/callback`;
        
        window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`
    }
  render() {
    return (
      <div style={{width: '100%', height: "100vh", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div className="card2">
            <div className="App-header" style={{fontSize: '35px', borderRadius: '10px'}}>
              Trip-Planer
              <img src={tree} style={{height: '10vh'}}/>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', height: '100%'}}>
              <button className="myButton3" style={{marginTop: '20px'}} onClick={this.login}>Login</button>
            </div>
        </div>
      </div>
    );
  }
}

export default Login;