import React, { Component } from 'react';
import Item from './PlanItem';
import axios from 'axios'
class Plans extends Component {
    constructor(){
        super()
        this.state={
        notes: [],
        userIn: "",
        }
        this.deletePlans=this.deletePlans.bind(this);
        this.updatePlan=this.updatePlan.bind(this);
    }

    componentDidMount(){
        let promise = axios.get('/api/Plans');
        promise.then(results =>{
                    console.log(results.data)
            this.setState({notes: results.data})
        })

    }
    update(){
        let promise = axios.get('/api/Plans');
        promise.then(results =>{
        console.log("update")
        this.setState({notes: results.data})
    }).catch(err => console.log("You suck alot"))
    }
    updatePlan(val, num){
        let promise = axios.put('/api/plans/update', 
        {val, num})
        promise.then(results =>{
            this.update()
        })
    }
    getPlans()
    {
        let planItems =[];
        for (let i =0;i<this.state.notes.length;i++)
        {
        const {info,plan_id} = this.state.notes[i]
        planItems.push(<Item
        key={plan_id}
        plan_id={plan_id}
        info ={info}
        deletePlans={this.deletePlans}
        updatePlan={this.updatePlan}      
        />)
        }
        return planItems;
    }
    deletePlans(val){
        let code = val;
        let promise=axios.delete('/api/plans/delete/'+code)
        promise.then(results => {
            this.update()
    })}
    newInput(value){
        this.setState({
            userIn: value
        })
    }
    newPlan(){
        let str = this.state.userIn;
        let promise = axios.post('/api/plans/create', 
        {str, num: 1})
        promise.then(results =>{
            this.update()
        }).catch(err => console.log("You suck"));
        

    }

  render() {
    return (
      <div>
          {this.getPlans()}
          <input onChange={e => this.newInput(e.target.value)} />
          <button onClick={() => this.newPlan()}></button>
      </div>
    );
  }
}

export default Plans;
