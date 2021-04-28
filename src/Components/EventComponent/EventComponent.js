import React from 'react'
import './EventComponent.sass'

function EventComponent(props) {
    return(
        <div id='eventComponentReturnWrapper'>
            <h1>EVENTS</h1>
            <img src={props.doc.data().imageUrl} alt=""/>
            <h1>{props.doc.data().title.toUpperCase()}</h1>
            <p>{props.doc.data().description.toUpperCase()}</p>
        </div>
    )
}

export default EventComponent