import React, {Component} from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import {updateTripsData} from './../ducks/users'
import TripItem from './../sub_compoents/TripItem'
export class Trips extends Component{
    constructor(){
        super()
        this.state = {
            userIn: "",
            profile_num: 0
        }
        this.deleteTrips=this.deleteTrips.bind(this);
        this.select=this.select.bind(this);
    }

    componentDidMount(){
        axios.get('/api/user-data').then(res =>{
            this.setState({
                profile_num: res.data.profile_num
            })
            console.log(this.state.profile_num)
            let code =res.data.profile_num
            axios.get('/api/Trips/' + code).then(results =>{
            this.props.updateTripsData(results.data)

        })
    })
    }
    update(){
        let code = this.state.profile_num;
        axios.get('/api/Trips/' + code).then(results =>{
            this.props.updateTripsData(results.data)
    })
    }
    display(){
        let show = [];
        show=this.props.trips.map((val,i) => {
        return (<TripItem 
        key={i}
        name={val.name} 
        img={val.img}
        id={val.id}
        profile_id={val.profile_id}
        deleteTrips={this.deleteTrips}
        select={this.select}
        />
        
        )})
        return show;
    }
    deleteTrips(val){
        let code = val;
        let promise=axios.delete('/api/Trips/delete/' + code)
        promise.then(results => {
        this.update()
    })
    }
    newInput(value){
        this.setState({
            userIn: value
        })
    }
    newTrip(){
        console.log('newtrips', this.state.profile_num)
        let img = 'img'
        let str = this.state.userIn;
        let num = this.state.profile_num;
        let promise = axios.post('/api/Trips/create', 
        {str, img, num})
        promise.then(results =>{
            this.update()
        });
    }
    select(value){
        let code = value;
        axios.post('/api/set-save/' + code).then(results => {
            console.log('confirmed' + results)
        })
    }

    render(){
        return(
            <div>
                
                  {this.display()}
                  <input onChange={e => this.newInput(e.target.value)}/>
                  <button onClick={() => this.newTrip()}>new</button>
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