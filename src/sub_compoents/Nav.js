import React from 'react'
import './../App.css';
import {Link} from 'react-router-dom'
import axios from 'axios'
import './../styles/Nav.css'
export default function Nav(){

    return (
        <div className="navBar">
            <div style={{width: '100%', opacity: .6}}>
                <button className="myButton">
                        <Link to='/Dashboard/Trips' style={{display: 'block', height: '100%', textDecoration: 'none', color: '#05668d', fontSize: '14px' }}>
                            Trips
                        </Link>
                </button>
            </div>
            <div style={{width: '100%', opacity: .6}}>
                <button className="myButton">
                    <Link to='/Dashboard/Plans' style={{display: 'block', height: '100%',textDecoration: 'none', color: '#05668d', fontSize: '14px' }}>Plans</Link>
                </button>
            </div>
            <div style={{width: '100%', opacity: .6}}>
                <button className="myButton">
                    <Link to='/Dashboard/Calender' style={{display: 'block', height: '100%', textDecoration: 'none', color: '#05668d', fontSize: '14px' }}>
                        Calender
                    </Link>
                </button>
            </div>
            <div style={{width: '100%', opacity: .6}}>
                <button className="myButton">
                    <Link to='/Dashboard/Map' style={{display: 'block', height: '100%', textDecoration: 'none', color: '#05668d', fontSize: '14px' }}>
                        Map
                    </Link>
                </button >
            </div>
            <div style={{width: '100%', opacity: .6}}>
                <button className="myButton" >
                    <Link to='/' style={{display: 'block', height: '100%', textDecoration: 'none', color: '#05668d', fontSize: '14px' }}>
                        Logout
                    </Link>
                </button>
            </div>
        </div>
    )

}