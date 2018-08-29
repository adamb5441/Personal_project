import React from 'react'
import tree from './../images/palm-tree.png'
import {Link} from 'react-router-dom'
import './../styles/Trips.css'
export default function TripItem(props){

        const {name , img, id, key} = props;
        console.log('this is the render');
        
        return(
        <div className='card'>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                {
                img ?
                <img src={img}  style={{width: '30vh', height: '30vh' }}/> :
                <img src={tree} style={{width: '30vh', height: '30vh'}} />
                }
            </div>
            <hr/>
            <div style={{textAlign: 'center', }}>
                <div>
                    {name}
                </div>
                <div >

                   <Link to='/Dashboard/Plans'> <button className='myButton2'  onClick={ () => props.select(id, name)}>select</button></Link>
                    <button className='myButton2'  onClick={ () => props.deleteTrips(id)}>delete</button>

                </div>
            </div>
        </div>
    )
}
