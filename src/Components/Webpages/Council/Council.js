import React, { useEffect, useState } from "react";
import "./Council.sass";
// import Navbar from "../../Navbar/Navbar";
import CouncilCard from "../../CouncilCard/CouncilCard";
import firebase from "../../../firebase";
import { PropagateLoader as Loader } from "react-spinners";

function Council() {
	const [staffCards, setStaffCards] = useState([]);
	const [captainsCards, setCaptainsCards] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchEvents = async () => {
			const firestore = firebase.firestore();

			const staffCollection = await firestore.collection("staff").get();
			const tempStaffCards = [];
			staffCollection.docs.forEach((doc) => {
				const docData = doc.data();
				tempStaffCards.push(
					<CouncilCard
						key={doc.id}
						name={docData.name}
						image={docData.imageUrl}
						position={docData.position}
						email={docData.email}
					/>
				);
			});
			setStaffCards(tempStaffCards);

			const captainsCollection = await firestore.collection("captains").get();
			const tempCaptainsCards = [];
			captainsCollection.docs.forEach((doc) => {
				const docData = doc.data();
				tempCaptainsCards.push(
					<CouncilCard
						key={doc.id}
						name={docData.name}
						image={docData.imageUrl}
						position={docData.position}
						email={docData.email}
					/>
				);
			});
			setCaptainsCards(tempCaptainsCards);
		};
		fetchEvents()
			.then(() => {
				setLoading(false);
			})
			.catch((err) => console.log(err));
	}, []);

	if (loading) {
		return <Loader loading={true} color={"#5a5a9f"} css={{ position: "fixed", top: "50%", left: "50%" }} />;
	} else {
		return (
			<div>
				<div id="councilReturnWrapper">
					<h1 className="councilHeader">STAFF MEMBERS</h1>
					<div className={"cardHandlerReturnWrapper"}>{staffCards}</div>
					<h1 className="councilHeader">CAPTAINS</h1>
					<div className={"cardHandlerReturnWrapper"}>{captainsCards}</div>
				</div>
			</div>
		);
	}
}

export default Council;
