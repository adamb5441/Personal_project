import React from 'react'

export default function TripItem(props){

        const {name , img, id, key} = props;
        console.log('this is the render');
        
        return(
        <div>
            <img src={img} alt="trip" />
            {name}
            <button style={{opacity: .6}} onClick={ () => props.deleteTrips(id)}>delete</button>
            <button style={{opacity: .6}} onClick={ () => props.select(id, name)}>select</button>

        </div>
    )
}
