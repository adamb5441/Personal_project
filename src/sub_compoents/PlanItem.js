import React, {Component} from 'react'
import './../styles/Plans.css'
export default class PlanItem extends Component{
        constructor(props){
            super(props)
            this.state={
                userIn: this.props.info
            }
        }
    input(value){
        this.setState({
            userIn: value,
        })
        console.log(this.state.userIn)
    }
    change(){
        if(this.state.show ===0){
            this.setState({
                show: 1
            })
        }
        else{
            this.setState({
                show: 0
            })
        }
    }

    render() {    
        const {info , plan_id} = this.props;
        console.log('this is the render');
        const display = (
            <div>
            <textarea style={{height: '90%', width: '100%', backgroundColor: '#cdcdcd'}} value={this.state.userIn} onChange={e => this.input(e.target.value)}/>
                    <button className='myButton2' onClick={ () => this.props.updatePlan(this.state.userIn, plan_id)}>save</button>
            </div>)
        


        return(
        <div className='card3'>
            <div style={{ width: '103%'}}>
             <button className='myButton2' style={{opacity: .6, float: 'right'}} onClick={ () => this.props.deletePlans(plan_id)}>X</button>
            </div>
            <div style={{height: '90%', width: '100%'}}>
             {this.state.show===1 ? display : info }
             </div>
             <button style={{height: '42px'}} className='myButton2' onClick={() => this.change()}>update</button>
            
        </div>
    )}
}