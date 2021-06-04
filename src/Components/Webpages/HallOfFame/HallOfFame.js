import React from "react";
import Slider from "react-slick";
import SliderCard from "../../SliderCard/SliderCard";
import firebase from "../../../firebase";
import "./HallOfFame.scss";
import { PropagateLoader as Loader } from "react-spinners";

class HallOfFame extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,

			cricketSlides: [],
			footballSlides: [],
			basketballSlides: [],
			badmintonSlides: [],
			athleticsSlides: [],
			ttSlides: [],
			tennisSlides: [],
			volleyballSlides: [],
			chessSlides: [],
		};

		const firestore = firebase.firestore();
		const fetchEvents = async () => {
			const dataCollection = await firestore.collection("awardees").get();
			dataCollection.docs.forEach((doc) => {
				const sport = doc.data().sport;
				const slideCard = <SliderCard key={doc.id} data={doc.data()} />;
				if (sport === "cricket") this.setState({ cricketSlides: this.state.cricketSlides.concat(slideCard) });
				else if (sport === "football")
					this.setState({ footballSlides: this.state.footballSlides.concat(slideCard) });
				else if (sport === "basketball")
					this.setState({ basketballSlides: this.state.basketballSlides.concat(slideCard) });
				else if (sport === "badminton")
					this.setState({ badmintonSlides: this.state.badmintonSlides.concat(slideCard) });
				else if (sport === "athletics")
					this.setState({ athleticsSlides: this.state.athleticsSlides.concat(slideCard) });
				else if (sport === "table tennis") this.setState({ ttSlides: this.state.ttSlides.concat(slideCard) });
				else if (sport === "tennis") this.setState({ tennisSlides: this.state.tennisSlides.concat(slideCard) });
				else if (sport === "volleyball")
					this.setState({ volleyballSlides: this.state.volleyballSlides.concat(slideCard) });
				else if (sport === "chess") this.setState({ chessSlides: this.state.chessSlides.concat(slideCard) });
			});
		};
		fetchEvents()
			.then(() => this.setState({ loading: false }))
			.catch((err) => console.log(err));

		this.settings = {
			arrows: true,
			fade: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
		};
	}

	render() {
		if (this.state.loading) {
			return <Loader loading={true} color={"#5a5a9f"} css={{ position: "fixed", top: "50%", left: "50%" }} />;
		} else {
			return (
				<div>
					<div id={"hall-of-fame-slides-manager"}>
						<Slider {...this.settings}>{this.state.cricketSlides}</Slider>
						<Slider {...this.settings}>{this.state.footballSlides}</Slider>
						<Slider {...this.settings}>{this.state.basketballSlides}</Slider>
						<Slider {...this.settings}>{this.state.badmintonSlides}</Slider>
						<Slider {...this.settings}>{this.state.athleticsSlides}</Slider>
						<Slider {...this.settings}>{this.state.ttSlides}</Slider>
						<Slider {...this.settings}>{this.state.tennisSlides}</Slider>
						<Slider {...this.settings}>{this.state.volleyballSlides}</Slider>
						<Slider {...this.settings}>{this.state.chessSlides}</Slider>
					</div>
				</div>
			);
		}
	}
}

export default HallOfFame;
