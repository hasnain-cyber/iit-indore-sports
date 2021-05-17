import React, {useState} from 'react'
import Slider from "react-slick"
import SliderCard from "../../SliderCard/SliderCard"
import firebase from "../../../firebase"
import './HallOfFame.sass'
import Navbar from "../../Navbar/Navbar"
import {PropagateLoader as Loader} from "react-spinners"

function HallOfFame() {

    const [loading, setLoading] = useState(true)

    const settings = {
        arrows: true,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'slides'
    }

    const [cricketSlides, setCricketSlides] = useState([])
    const [footballSlides, setFootballSlides] = useState([])
    const [basketballSlides, setBasketballSlides] = useState([])
    const [badmintonSlides, setBadmintonSlides] = useState([])
    const [athleticsSlides, setAthleticsSlides] = useState([])
    const [ttSlides, setTtSlides] = useState([])
    const [tennisSlides, setTennisSlides] = useState([])
    const [volleyballSlides, setVolleyballSlides] = useState([])
    const [chessSlides, setChessSlides] = useState([])

    const firestore = firebase.firestore()
    const fetchEvents = async () => {
        const dataCollection = await firestore.collection('awardees').get()
        dataCollection.docs.forEach(doc => {
            const docData = doc.data()
            const sport = docData.sport
            const slideCard = <SliderCard key={doc.id} imageUrl={docData.imageUrl} title={docData.title}
                                          description={docData.description} heading={sport}/>

            if (sport === 'cricket')
                setCricketSlides(cricketSlides.concat(slideCard))
            else if (sport === 'football')
                setFootballSlides(footballSlides.concat(slideCard))
            else if (sport === 'basketball')
                setBasketballSlides(basketballSlides.concat(slideCard))
            else if (sport === 'badminton')
                setBadmintonSlides(badmintonSlides.concat(slideCard))
            else if (sport === 'athletics')
                setAthleticsSlides(athleticsSlides.concat(slideCard))
            else if (sport === 'table tennis')
                setTtSlides(ttSlides.concat(slideCard))
            else if (sport === 'tennis')
                setTennisSlides(tennisSlides.concat(slideCard))
            else if (sport === 'volleyball')
                setVolleyballSlides(volleyballSlides.concat(slideCard))
            else if (sport === 'chess')
                setChessSlides(chessSlides.concat(slideCard))
        })
    }
    fetchEvents()
        .then(() => setLoading(false))
        .catch(err => console.log(err))

    if (loading) {
        return (
            <Loader loading={true} color={'#5a5a9f'}
                    css={{position: "fixed", top: "50%", left: "50%"}}/>
        )
    } else {
        return (
            <div>
                <Navbar/>
                <div id={'hallOfFameReturnWrapper'}>
                    <Slider {...settings}>
                        {cricketSlides}
                    </Slider>
                    <Slider {...settings}>
                        {footballSlides}
                    </Slider>
                    <Slider {...settings}>
                        {basketballSlides}
                    </Slider>
                    <Slider {...settings}>
                        {badmintonSlides}
                    </Slider>
                    <Slider {...settings}>
                        {athleticsSlides}
                    </Slider>
                    <Slider {...settings}>
                        {ttSlides}
                    </Slider>
                    <Slider {...settings}>
                        {tennisSlides}
                    </Slider>
                    <Slider {...settings}>
                        {volleyballSlides}
                    </Slider>
                    <Slider {...settings}>
                        {chessSlides}
                    </Slider>
                </div>
            </div>
        )
    }
}

export default HallOfFame