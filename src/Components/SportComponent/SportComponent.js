import React from 'react'
import './SportComponent.sass'
import {Link} from "react-router-dom";

function SportComponent(props) {

    return (
        <Link id='sportComponentLink' to={'/'.concat(props.name)}>
            <div id='sportComponentWrapper'>
                <img src={props.imageUrl} alt=''/>
                <h1>{props.name}</h1>
            </div>
        </Link>
    )
}

export default SportComponent