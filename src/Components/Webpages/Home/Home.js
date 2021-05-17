import React, {useEffect, useState} from "react"
import Navbar from "../../Navbar/Navbar";
import HomeIntroduction from "../../HomeIntroduction/HomeIntroduction";
import Footer from "../../HomeFooter/HomeFooter";
import HomeSportsAnnouncements from "../../HomeSports/HomeSportsAnnouncements";
import firebase from "../../../firebase";
import SliderCard from "../../SliderCard/SliderCard";
import Slider from "react-slick";
import {PropagateLoader as Loader} from "react-spinners";

function Home() {

    const [loading, setLoading] = useState(true)
    const settings = {
        arrows: true,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const [eventSlides, setEventSlides] = useState([])
    const [announcementsCollection, setAnnouncementCollection] = useState([])
    useEffect(() => {
        const fetchEvents = async () => {

            const firestore = firebase.firestore()

            const eventCollection = await firestore.collection('events').get()
            setEventSlides(eventCollection.docs.map(doc => {
                const docData = doc.data()
                return (<SliderCard key={doc.id} imageUrl={docData.imageUrl} title={docData.title}
                                    description={docData.description} heading={'EVENTS'}/>)
            }))

            setAnnouncementCollection(await firestore.collection('announcements').get())
        }
        fetchEvents()
            .then(() => setLoading(false))
            .catch(err => console.log(err))
    }, [])

    if (loading) {
        return (
            <Loader loading={true} color={'#5a5a9f'}
                    css={{position: "fixed", top: "50%", left: "50%"}}/>
        )
    } else {
        return (
            <div>
                <Navbar/>
                <HomeIntroduction/>
                {/*the events are shown here*/}
                <Slider {...settings}>
                    {eventSlides}
                </Slider>
                {/*sport announcements are shown here*/}
                <HomeSportsAnnouncements announcementsCollection={announcementsCollection}/>
                <Footer/>
            </div>
        )
    }
}

export default Home