import React from 'react'
import Slider from "react-slick";
import SliderCard from "../../SliderCard/SliderCard";
import firebase from "../../../firebase";

class HallOfFame extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
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

        this.fetchEvents = async () => {
            const eventCollection = await firestore.collection('awardees').get()
            this.setState({
                slides:
                    eventCollection.docs.map(doc => {
                        const docData = doc.data()
                        const slideCard = <SliderCard key={doc.id} imageUrl={docData.imageUrl} title={docData.title}
                                                      description={docData.description} heading={docData.sport}/>
                        const sport = docData.sport
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

                        return slideCard
                    })
            })
        }
        this.fetchEvents().catch(err => console.log(err))

        this.settings = {
            accessibility: true,
            autoplay: true,
            autoplaySpeed: 3000,
            fade: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            className: 'slides'
        }
    }

    render() {
        return (
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
        )
    }
}

export default HallOfFame