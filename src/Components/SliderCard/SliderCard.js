import React from "react";
import "./SliderCard.sass";

function SliderCard(props) {
	return (
		<div id="sliderCardReturnWrapper">
			{props.heading ? <h1 id={"sliderCardHeading"}>{props.heading.toUpperCase()}</h1> : <br />}
			<img src={props.data.imageUrl} alt="" />
			<h1 id={"sliderCardTitle"}>{props.data.title.toUpperCase()}</h1>
			<p>{props.data.description.toUpperCase()}</p>
		</div>
	);
}

export default SliderCard;
