import React from 'react'
import './EventComponent.sass'

function EventComponent(props) {
    return(
        <div id='eventComponentReturnWrapper'>
            <h1>EVENTS</h1>
            <img src={props.doc.data().imageUrl} alt=""/>
            <h2>{props.doc.data().title}</h2>
            <p>{props.doc.data().description}</p>
        </div>
    )
}

export default EventComponent