import React from 'react'
import './../App.css';
import {Link} from 'react-router-dom'
import axios from 'axios'
import './../styles/Nav.css'
import suitcase from './../images/suitcase-19-112179.png'
import notes from './../images/notes.png'
import CalImg from './../images/calendar.jpg'
import mapImg from './../images/Map-512.png'
import logout from './../images/logout-43.png'
export default function Nav(){

    return (
        <div className="navBar">
            <div className='buttons'>
                <div style={{width: '100%', opacity: .6}}>
                    <button className="myButton">
                            <Link to='/Dashboard/Trips' style={{display: 'block', height: '100%', textDecoration: 'none', color: '#05668d', fontSize: '18px' }}>
                                Trip
                                <div>
                                    <img style={{ height: '30px'}} src={suitcase} />
                                </div>
                            </Link>                     
                    </button>
                </div>
                <div style={{width: '100%', opacity: .6}}>
                    <button className="myButton">
                        <Link to='/Dashboard/Plans' style={{display: 'block', height: '100%',textDecoration: 'none', color: '#05668d', fontSize: '18px' }}>
                        
                        Plans
                        <div>
                            <img style={{ height: '20px'}} src={notes} />
                        </div>                   
                        </Link>
    
                    </button>
                </div>
                <div style={{width: '100%', opacity: .6}}>
                    <button className="myButton">
                        <Link to='/Dashboard/Calender' style={{display: 'block', height: '100%', textDecoration: 'none', color: '#05668d', fontSize: '18px' }}>
                            Calendar
                        <div>
                            <img style={{ height: '20px'}} src={CalImg} />
                        </div>  
                        </Link>
                    </button>
                </div>
                <div style={{width: '100%', opacity: .6}}>
                    <button className="myButton">
                        <Link to='/Dashboard/Map' style={{display: 'block', height: '100%', textDecoration: 'none', color: '#05668d', fontSize: '18px' }}>
                            Map
                            <div>
                                <img style={{ height: '20px'}} src={mapImg} />
                            </div> 
                        </Link>
                    </button >
                </div>
                <div style={{width: '100%', opacity: .6}}>
                <button className="myButton" >
                    <Link to='/' style={{display: 'block', height: '100%', textDecoration: 'none', color: '#05668d', fontSize: '18px' }}>
                        Logout
                        <div>
                        <img style={{ height: '20px'}} src={logout} />
                        </div> 
                    </Link>
                </button>
            </div>
            </div>
        </div>
    )

}