import React from 'react'
import Slider from "react-slick"
import SliderCard from "../../SliderCard/SliderCard"
import firebase from "../../../firebase"
import './HallOfFame.sass'
import Navbar from "../../Navbar/Navbar"
import {PropagateLoader as Loader} from "react-spinners"

// noinspection JSUnfilteredForInLoop
class HallOfFame extends React.Component {

    settings = {
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'slides'
    }

    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            slides: [],
        }

        this.cricketSlides = []
        this.footballSlides = []
        this.basketballSlides = []
        this.badmintonSlides = []
        this.athleticsSlides = []
        this.ttSlides = []
        this.tennisSlides = []
        this.volleyballSlides = []
        this.chessSlides = []

        const firestore = firebase.firestore()
        const fetchEvents = async () => {
            const dataCollection = await firestore.collection('awardees').get()
            for (let id in dataCollection.docs) {
                const doc = dataCollection.docs[id]
                const docData = doc.data()
                const sport = docData.sport
                const slideCard = <SliderCard key={doc.id} imageUrl={docData.imageUrl} title={docData.title}
                                              description={docData.description} heading={sport}/>

                if (sport === 'cricket')
                    this.cricketSlides.push(slideCard)
                else if (sport === 'football')
                    this.footballSlides.push(slideCard)
                else if (sport === 'basketball')
                    this.basketballSlides.push(slideCard)
                else if (sport === 'badminton')
                    this.badmintonSlides.push(slideCard)
                else if (sport === 'athletics')
                    this.athleticsSlides.push(slideCard)
                else if (sport === 'table tennis')
                    this.ttSlides.push(slideCard)
                else if (sport === 'tennis')
                    this.tennisSlides.push(slideCard)
                else if (sport === 'volleyball')
                    this.volleyballSlides.push(slideCard)
                else if (sport === 'chess')
                    this.chessSlides.push(slideCard)
            }
        }
        fetchEvents()
            .then(() => this.setState({loading: false}))
            .catch(err => console.log(err))
    }

    render() {
        if (this.state.loading) {
            return (
                <Loader loading={true} color={'#5a5a9f'}
                        css={{position: "fixed", top: "50%", left: "50%"}}/>
            )
        } else {
            return (
                <div>
                    <Navbar/>
                    <div id={'hallOfFameReturnWrapper'}>
                        <Slider {...this.settings}>
                            {this.cricketSlides}
                        </Slider>
                        <Slider {...this.settings}>
                            {this.footballSlides}
                        </Slider>
                        <Slider {...this.settings}>
                            {this.basketballSlides}
                        </Slider>
                        <Slider {...this.settings}>
                            {this.badmintonSlides}
                        </Slider>
                        <Slider {...this.settings}>
                            {this.athleticsSlides}
                        </Slider>
                        <Slider {...this.settings}>
                            {this.ttSlides}
                        </Slider>
                        <Slider {...this.settings}>
                            {this.tennisSlides}
                        </Slider>
                        <Slider {...this.settings}>
                            {this.volleyballSlides}
                        </Slider>
                        <Slider {...this.settings}>
                            {this.chessSlides}
                        </Slider>
                    </div>
                </div>
            )
        }
    }
}

export default HallOfFame