import React, { Component } from 'react';
import Item from './PlanItem';
import axios from 'axios'
class Plans extends Component {
    constructor(){
        super()
        this.state={
        notes: []
        }
        // this.deletePlans=this.deletePlans.bind(this);

    }

    componentDidMount(){
        let promise = axios.get('/api/Plans');
        promise.then(results =>{
                    console.log(results.data)
            this.setState({notes: [...results.data]})
        })

    }
    getPlans()
    {
        let stuff =[];
        for (let i =0;i<this.state.notes.length;i++)
        {
        stuff.push(<Item
        Item key={i}
        // plan_id={this.state.notes[i].plan_id}
        str={this.state.notes[i].info} 
        // deletePlans={this.deletePlans}
        />

        )}
        return stuff;
    }
    // deletePlans(val){
    //     let code = val;
    //     let promise=axios.delete('/api/plans/delete/'+code)
    //     promise.then(results => {
    //         console.log(results.data)
    //         let arr = this.state.notes.slice(0);
    //         console.log(results.data[0]);
    //         arr.splice(results.data,1)
    //         this.setState({
    //         notes: arr
    //     })
    // })}
  render() {
    return (
      <div>
          {this.getPlans()}
      </div>
    );
  }
}

export default Plans;
