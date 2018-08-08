import React from 'react'
import './../App.css';
import {connect} from 'react-redux'

export function header(props){
    let {user, selected} = props
    return(        
        <div className="App">
            <div className="App-header">
         <div>
             {selected ? (<p>{selected}</p>) : (<p>Please select trip</p>)}
        </div>
            {user.name ? (
          <div>
            <img style={{height: 40}} src={user.picture} alt="" />
            <p>{user.name}</p>
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