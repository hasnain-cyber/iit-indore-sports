import React, {useEffect, useState} from 'react'
import Slider from "react-slick"
import firebase from "../../firebase";
import SliderCard from "../SliderCard/SliderCard";

function HomeEvents() {

    const settings = {
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'slides'
    }

    const [slideCards, setSlideCards] = useState([])

    useEffect(() => {
        const fetchEvents = async () => {
            const firestore = firebase.firestore()
            const eventCollection = await firestore.collection('events').get()
            setSlideCards(eventCollection.docs.map(doc => {
                const docData = doc.data()
                return (<SliderCard key={doc.id} imageUrl={docData.imageUrl} title={docData.title}
                                    description={docData.description} heading={''}/>)
            }))
        }
        fetchEvents().catch(err => console.log(err))
    }, [])

    return (
        <Slider {...settings}>
            {slideCards}
        </Slider>
    )
}

export default HomeEvents