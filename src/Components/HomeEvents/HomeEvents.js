import React, {useEffect, useState} from 'react'
import firebase from "../../firebase";
import SliderCard from '../EventComponent/SliderCard'
import './HomeEvents.sass'
import Slider from "react-slick"

function HomeEvents() {

    const [events, setEvents] = useState([])

    const firestore = firebase.firestore()

    useEffect(() => {
        const fetchEvents = async () => {
            const eventCollection = await firestore.collection('events').get()
            setEvents(eventCollection.docs.map(doc => {
                return <SliderCard key={doc.id} imageUrl={doc.data().imageUrl} title={doc.data().title}
                                   description={doc.data().description} heading={'events'}/>
            }))
        }
        fetchEvents().catch(err => console.log(err))
    }, [firestore])

    const settings = {
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'slides'
    }

    return (
        <Slider {...settings}>
            {events}
        </Slider>
    )
}

export default HomeEvents