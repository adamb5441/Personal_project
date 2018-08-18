import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
import moment from 'moment';
import DatePicker from 'react-datepicker'; 
import axios from 'axios' 
import "react-big-calendar/lib/css/react-big-calendar.css";
import 'react-datepicker/dist/react-datepicker.css';
import './../styles/Calender.css'
Calendar.setLocalizer(Calendar.momentLocalizer(moment));
class BigCalender extends Component {
    constructor(props){
        super(props)
        this.state={
            startDate: moment(),
            endDate: moment(),
            title: "",
            myEventsList: [],
            saveNum: 0
        }
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
    }
    componentDidMount(){
        axios.get('/api/save-data').then(results =>{
        let code = results.data.id;
        axios.get("/api/dates/" + code).then(res =>{
            let info=res.data.map( val =>{
                console.log(val)
             let obj = {
                start: new Date(moment(val.startdate)),
                end: new Date(moment(val.enddate)),
                title: val.title,
                id: val.id

            }
            return obj;
        })
            this.setState({
                myEventsList: info,
                saveNum: code
            })
        })
    })
    }
    update(){
        let code = this.state.saveNum;
        axios.get("/api/dates/" + code).then(res =>{
            let info=res.data.map( val =>{
                console.log(val)
             let obj = {
                start: new Date(moment(val.startdate)),
                end: new Date(moment(val.enddate)),
                title: val.title,
                id: val.id
            }
            return obj;
        })
            this.setState({
                myEventsList: info
            })
        })
    }
    handleChangeStart(date) {
        console.log(date);
      this.setState({
        startDate: date
      });
    }
    handleChangeEnd(date) {
        console.log(date);
      this.setState({
        endDate: date
      });
    }
    handleChangeTitle(val) {
      this.setState({
        title: val
      });
    }
    Add(){
        let {startDate, endDate, title, saveNum} = this.state;
        axios.post('/api/dates/create', {startDate, endDate, title, saveNum}).then(res =>{
            this.update()
        })
    }
    deleteDate(val){
        let code = val.id;
        axios.delete('/api/dates/delete/'+code).then(res => {
            this.update()
        })
        console.log(val);
    }
    checkMedia(){
        let width = window.innerWidth;
        console.log(width)
          if(width > '480'){
            return true;
          } else{
           return false
          }
    }
  render() {
    return (
        <div >

                <div className='formCard3'>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                        <h1 style={{fontSize: '16px', marginBottom: 0}}> Set a Date</h1>
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChangeStart}
                            style={{ width: '5px'}}
                            withPortal
                        /> 

                        <DatePicker
                            selected={this.state.endDate}
                            onChange={this.handleChangeEnd}
                            withPortal
                        />
                    
                    <div>
                        <input onChange={e => this.handleChangeTitle(e.target.value)} />
                        <button className='myButton2' onClick={() => this.Add()}  >Add</button> 
                    </div>
                </div>
                </div> 
                <Calendar
                    style={{marginTop: '20px'}}
                    onSelectEvent={e => this.deleteDate(e)}
                    defaultView="month"
                    events={this.state.myEventsList}
                    toolbar={this.checkMedia()}
                    className='Calender'
                />
          
        </div>
     
    );
  }
}

export default BigCalender;
