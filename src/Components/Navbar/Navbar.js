import React from "react"
import './Navbar.sass'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav id="navbar">
            <Link to='/'>
                <img className="logo" src={'/logo.png'} alt="logo"/>
            </Link>
            <div>
                <div id='navbarButtonWrapper'>
                    <button><b>COUNCIL</b></button>
                    <button><b>HALL OF FAME</b></button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar