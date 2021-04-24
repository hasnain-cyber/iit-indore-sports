import React, {useEffect, useState} from 'react'
import firebase from "../../firebase";
import EventComponent from '../EventComponent/EventComponent'
import './HomeEvents.sass'
import Slider from "react-slick"

function HomeEvents() {

    const [events, setEvents] = useState([])

    const firestore = firebase.firestore()

    useEffect(() => {
        const fetchEvents = async () => {
            const eventCollection = await firestore.collection('events').get()
            setEvents(eventCollection.docs.map(doc => {
                return <EventComponent key={doc.id} doc={doc}/>
            }))
        }
        fetchEvents().catch(err => console.log(err))
    }, [])

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        className: 'slides'
    }

    return (
        <Slider {...settings}>
            {events}
        </Slider>
    )
}

export default HomeEvents