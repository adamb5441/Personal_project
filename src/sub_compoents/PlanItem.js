import React from 'react'

export default function PlanItem(props){
        const {str, plan_id} = props
    return(
        <div>
            {str}
            {/* <button style={{opacity: .6}} onClick={ () => props.deletePlans(props.plan_id)}>delete</button> */}
        </div>
    )
}