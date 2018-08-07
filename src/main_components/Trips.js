import React, {Component} from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import {updateTripsData} from './../ducks/users'

export class Trips extends Component{


    componentDidMount(){
        axios.get('/api/user-data').then(res =>{
            let code =res.data.profile_num
            axios.get('/api/Trips/' + code).then(results =>{
            this.props.updateTripsData(results.data)
        })
    })
    }
    display(){
        let show =this.props.trips.map(val => <p> {val.name} </p>)
        return show;
    }
    render(){
        const {trips} = this.props
        return(
            <div>
                 <p>Trip to: {this.display()}</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        trips: state.trips,
        user: state.user
    }
}
export default connect(mapStateToProps,{updateTripsData})(Trips);