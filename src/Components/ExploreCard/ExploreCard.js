import React from 'react'
import './ExploreCard.sass'
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'

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
            <Fade>
                <p>{props.text}</p>
            </Fade>
        </div>
    )
}

export default ExploreCard