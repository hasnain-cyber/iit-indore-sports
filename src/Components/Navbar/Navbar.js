import React from "react"
import './Navbar.sass'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav id="navbar">
            <Link to='/'>
                <img className="logo" src={'/images/logo.png'} alt="logo"/>
            </Link>
            <div>
                <Link className="link" to="/council">
                    <span>COUNCIL</span>
                </Link>
                <Link className="link" to="/hallOfFame">
                    <span>HALL OF FAME</span>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar