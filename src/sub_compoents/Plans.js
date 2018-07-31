import React, { Component } from 'react';
import Item from './PlanItem';
import axios from 'axios'
class Plans extends Component {
    constructor(){
        super()
        this.state={
        notes: []
        }
    }
    componentDidMount(){
        let promise = axios.get('/api/Plans');
        promise.then(results =>{
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
        str={this.state.notes[i]} />
        )}
        return stuff;
    }
  render() {
    return (
      <div>
          {this.getPlans()}
      </div>
    );
  }
}

export default Plans;
