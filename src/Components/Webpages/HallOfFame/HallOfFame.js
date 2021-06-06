import React from "react";
import "./HallOfFame.scss";
import HallOfFameCard from "../../HallOfFameCard/HallOfFameCard";

class HallOfFame extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            cricketSlides: [],
            footballSlides: [],
            basketballSlides: [],
            badmintonSlides: [],
            athleticsSlides: [],
            ttSlides: [],
            tennisSlides: [],
            volleyballSlides: [],
            chessSlides: [],
        }

        this.settings = {
            arrows: true,
            fade: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }

    componentDidMount() {
        const dataCollection = this.props.hallOfFameCollection
        const cricketCards = []
        const footballCards = []
        const basketballCards = []
        const badmintonCards = []
        const athleticsCards = []
        const ttCards = []
        const tennisCards = []
        const volleyballCards = []
        const chessCards = []

        dataCollection.docs.forEach((doc) => {
            const sport = doc.data().sport
            const slideCard = <HallOfFameCard key={doc.id} data={doc.data()}/>
            if (sport === "cricket")
                cricketCards.push(slideCard)
            else if (sport === "football")
                footballCards.push(slideCard)
            else if (sport === "basketball")
                basketballCards.push(slideCard)
            else if (sport === "badminton")
                badmintonCards.push(slideCard)
            else if (sport === "athletics")
                athleticsCards.push(slideCard)
            else if (sport === "table tennis")
                ttCards.push(slideCard)
            else if (sport === "tennis")
                tennisCards.push(slideCard)
            else if (sport === "volleyball")
                volleyballCards.push(slideCard)
            else if (sport === "chess")
                chessCards.push(slideCard)
        })

        this.setState({cricketSlides: cricketCards})
        this.setState({footballSlides: footballCards})
        this.setState({basketballSlides: basketballCards})
        this.setState({badmintonSlides: badmintonCards})
        this.setState({athleticsSlides: athleticsCards})
        this.setState({ttSlides: ttCards})
        this.setState({tennisSlides: tennisCards})
        this.setState({volleyballSlides: volleyballCards})
        this.setState({chessSlides: chessCards})
    }

    render() {
        return (
            <div id={"hall-of-fame-return-wrapper"}>
                <h1>CRICKET</h1>
                <div className="hall-of-fame-section">
                    {this.state.cricketSlides}
                </div>
                <h1>FOOTBALL</h1>
                <div className="hall-of-fame-section">
                    {this.state.footballSlides}
                </div>
                <h1>BASKETBALL</h1>
                <div className="hall-of-fame-section">
                    {this.state.basketballSlides}
                </div>
                <h1>BADMINTON</h1>
                <div className="hall-of-fame-section">
                    {this.state.badmintonSlides}
                </div>
                <h1>ATHLETICS</h1>
                <div className="hall-of-fame-section">
                    {this.state.athleticsSlides}
                </div>
                <h1>TABLE TENNIS</h1>
                <div className="hall-of-fame-section">
                    {this.state.ttSlides}
                </div>
                <h1>TENNIS</h1>
                <div className="hall-of-fame-section">
                    {this.state.tennisSlides}
                </div>
                <h1>VOLLEYBALL</h1>
                <div className="hall-of-fame-section">
                    {this.state.volleyballSlides}
                </div>
                <h1>CHESS</h1>
                <div className="hall-of-fame-section">
                    {this.state.chessSlides}
                </div>
            </div>
        )
    }
}

export default HallOfFame
