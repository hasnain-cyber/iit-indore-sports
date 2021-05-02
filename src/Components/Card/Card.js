import React from 'react'
import './Card.sass'

function Card(props) {
    return (
        <article className="card">
            <img id='cardImage' src={props.image} alt=''/>
            <h1 id='cardNameHeader'>{props.name.toUpperCase()}</h1>
            <h1 id='cardPositionHeader'>{props.position.toUpperCase()}</h1>
            <h4 id='cardEmailHeader'>EMAIL</h4>
            <h4 id='cardEmail'>{props.email}</h4>
        </article>
    )
}

export default Card