import tree from './../images/palm-tree.png'
import React from 'react'
import './../App.css';
import {connect} from 'react-redux'


export function header(props){
    let {user, selected} = props
    return(        
        <div className="App">
            <div className="App-header" >
              <div>
                <img src={tree} style={{width: '20px', height: '20px'}}/>
              </div>
              <div>
                  {selected ? (<p>{selected}</p>) : (<p>Please select trip</p>)}
              </div>
                  {user.name ? (
                <div>
                  <img style={{height: 30, marginBottom: 0, padding: 0,  boxShadow: '.5px 1px #05668d'}} src={user.picture} alt="" />
                  <p style={{padding: 0, margin: 0 }}>{user.name}</p>
                </div>
              ) : (
                <p>Please log in.</p>
              )}
            </div>
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