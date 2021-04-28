import React from 'react'
import './Card.sass'

function Card(props) {
    return (
        <div id='cardWrapper'>
            <img id='cardImage' src={props.image} alt=''/>
            <h1>{props.name}</h1>
            <h1>{props.position}</h1>
            <h1>{props.email}</h1>
        </div>
    )
}

export default Card