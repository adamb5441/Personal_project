import React from 'react'
import './../App.css';
import {Link} from 'react-router-dom'
import axios from 'axios'
import './../styles/Nav.css'
export default function Nav(){

    return (
        <div className="navBar">
            <div>
                <button>
                    <Link to='/Dashboard/Trips'>Trips</Link>
                </button>
            </div>
            <div>
                <button>
                    <Link to='/Dashboard/Plans'>Plans</Link>
                </button>
            </div>
            <div>
                <button>
                    <Link to='/'>
                        Logout
                    </Link>
                </button>
            </div>
        </div>
    )

}