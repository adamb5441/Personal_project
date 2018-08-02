import React, {Component} from 'react'

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
            show: 0
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
        
        const display = (
            <div>
            <input value={this.state.userIn} onChange={e => this.input(e.target.value)}/>
            <button style={{opacity: .6}} onClick={ () => this.props.updatePlan(this.state.userIn, plan_id)}>save</button>
            </div>)
        


        return(
        <div>
             {this.state.show===1 ? display : info }
            <button style={{opacity: .6}} onClick={ () => this.props.deletePlans(plan_id)}>delete</button>
            <button style={{opacity: .6}} onClick={() => this.change()}>update</button>

        </div>
    )}
}