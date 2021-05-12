import React from 'react'
import './SliderCard.sass'

function SliderCard(props) {
    return (
        <div id='sliderCardReturnWrapper'>
            <h1 id={'sliderCardHeading'}>{props.heading.toUpperCase()}</h1>
            <img src={props.imageUrl} alt=""/>
            <h1 id={'sliderCardTitle'}>{props.title.toUpperCase()}</h1>
            <p>{props.description.toUpperCase()}</p>
        </div>
    )
}

export default SliderCard