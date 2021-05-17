import React from "react"
import './Navbar.sass'
import {Link} from 'react-router-dom'
import {Sling as Hamburger} from 'hamburger-react'

class Navbar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.hamburgerLinks = document.getElementById('hamburgerLinks')
    }

    handleClick() {
        const newOpenState = !this.state.isOpen
        this.setState({isOpen: newOpenState})
        this.hamburgerLinks.style.transform = (newOpenState ? 'scaleY(1)' : 'scaleY(0)')
    }

    render() {
        return (
            <div id={'navbarReturnWrapper'}>
                <nav id="navbar">
                    <img className="logo" src={'/logo.png'} alt="logo"/>
                    <div id={'hamburgerIconWrapper'}>
                        <Hamburger toggled={this.state.isOpen} toggle={this.handleClick}/>
                    </div>
                    <div id='navbarButtonWrapper'>
                        <Link to={'/'}>
                            <button><b>HOME</b></button>
                        </Link>
                        <Link to={'/council'}>
                            <button><b>COUNCIL</b></button>
                        </Link>
                        <Link to={'/hallOfFame'}>
                            <button><b>HALL OF FAME</b></button>
                        </Link>
                        <Link to={'/explore'}>
                            <button><b>EXPLORE</b></button>
                        </Link>
                    </div>
                </nav>
                <ul id={'hamburgerLinks'}>
                    <li>
                        <Link to={'/'}>
                            <span>HOME</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/council'}>
                            <span>COUNCIL</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/hallOfFame'}>
                            <span>HALL OF FAME</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/explore'}>
                            <span>EXPLORE</span>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navbar