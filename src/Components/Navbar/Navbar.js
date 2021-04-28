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
                    <Link to={'/council'}>
                        <button><b>COUNCIL</b></button>
                    </Link>
                    <Link to={'/hallOfFame'}>
                        <button><b>HALL OF FAME</b></button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar