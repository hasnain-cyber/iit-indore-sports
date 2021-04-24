import React from 'react'
import './SportComponent.sass'

function SportComponent(props) {

    return (
        <div id='sportComponentWrapper'>
            <img src={props.imageUrl} alt=''/>
            <h1>{props.name}</h1>
        </div>
    )
}

export default SportComponent