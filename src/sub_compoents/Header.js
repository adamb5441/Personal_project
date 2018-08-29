import tree from './../images/palm-tree.png'
import React from 'react'
import './../App.css';
import {connect} from 'react-redux'
import Nav from './Nav'


export function header(props){
    let {user, selected} = props
    return(        
        <div className="App">
            <div className="header" >
            <div style={{display: 'flex', alignItems: 'center'}}>
              <p style={{fontSize: '26px'}}>Trip-Planner</p>
                <div>
                  <img src={tree} style={{width: '26px', height: '26px'}}/>
                </div>
            </div>

                  {user.name ? (
                <div >
                  <img style={{height: 30, marginBottom: 0, padding: 0,  boxShadow: '.5px 1px #05668d,', borderRadius: '20px'}} src={user.picture} alt="" />
                  <p style={{padding: 0, margin: 0 }}>{user.name}</p>
                </div>
              ) : (
                <p>Please log in.</p>
              )}
            
            </div>
            
            <Nav />
        </div>
    )}
    function mapStateToProps(state) {
        return {
          user: state.user,
          trips: state.trips,
          selected: state.selected
        };
      }
      
      export default connect(
        mapStateToProps,
        { }
      )(header);