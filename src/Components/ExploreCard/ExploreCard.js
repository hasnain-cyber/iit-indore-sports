import React from 'react'
import './ExploreCard.sass'
import Slide from 'react-reveal/Slide'

function ExploreCard(props) {

    let imgStyle = {}
    if (props.alignment !== 0) {
        imgStyle = {
            flexDirection: 'row-reverse'
        }
    }

    return (
        <div className={'exploreCardReturnWrapper'} style={imgStyle}>
            <Slide left={props.alignment===0} right = {props.alignment!==0}>
                <img className={'exploreCardImage'} src={props.imageUrl} alt={''}/>
            </Slide>
            <p>{props.text}</p>
        </div>
    )
}

export default ExploreCard