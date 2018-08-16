import React, {Component} from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import {updateTripsData, updateSelected} from './../ducks/users'
import TripItem from './../sub_compoents/TripItem'
import './../App.css'
import './../styles/Trips.css'
import {Link} from 'react-router-dom'
export class Trips extends Component{
    constructor(){
        super()
        this.state = {
            userIn: "",
            profile_num: 0,
            images: ""
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
    newInputImg(value){
        this.setState({
            images: value
        })
    }
    newTrip(){
        console.log('newtrips', this.state.profile_num)
        let img = this.state.images;
        let str = this.state.userIn;
        let num = this.state.profile_num;
        let promise = axios.post('/api/Trips/create', 
        {str, img, num})
        promise.then(results =>{
            this.update()
        });
    }
    select(value, str){
        let code = value;
        axios.post('/api/set-save/' + code).then(results => {
            this.props.updateSelected(str)
        })
    }

    render(){
        return(
            <div style={{justifyContent: 'center'}} >
                <div style={{margin: 20, display: 'flex', justifyContent: 'center'}} >
                    <input style={{height: '20px'}} className='box font' onChange={e => this.newInput(e.target.value)} />
                    <input style={{height: '20px'}} className='box font' onChange={e => this.newInputImg(e.target.value)} />
                    <button className='myButton2' onClick={() => this.newTrip()}>new</button>
                </div>
                <div className='display'>
                    {this.display()}
                </div>



            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        trips: state.trips,
        user: state.user,
        selected: state.selected
    }
}
export default connect(mapStateToProps,{updateTripsData, updateSelected})(Trips);