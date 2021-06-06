import React from 'react'
import './HallOfFameCard.scss'

function HallOfFameCard(props) {
    return (
        <div id={'hall-of-fame-card-return-wrapper'}>
            <img src={props.data.imageUrl} alt={props.data.title}/>
            <h1>{props.data.title}</h1>
        </div>
    );
}

export default HallOfFameCard