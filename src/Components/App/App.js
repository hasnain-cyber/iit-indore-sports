import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Council from "../Webpages/Council/Council";
import HallOfFame from "../Webpages/HallOfFame/HallOfFame";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import firebase from "../../firebase";
import SliderCard from "../SliderCard/SliderCard";
import {PropagateLoader as Loader} from "react-spinners";
import Home from "../Webpages/Home/Home";
import CouncilCaptainCard from "../CouncilCaptainCard/CouncilCaptainCard";
import ExploreCard from "../ExploreCard/ExploreCard";
import Explore from "../Webpages/Explore/Explore";
import CouncilStaffCard from "../CouncilStaffCard/CouncilStaffCard";

function App() {

    const [loading, setLoading] = useState(true)

    const [eventSlides, setEventSlides] = useState([]) // For home page event slides
    const [announcementsCollection, setAnnouncementCollection] = useState([]) // For home page announcements
    const [hallOfFameCollection, setHallOfFameCollection] = useState([])
    const [staffCards, setStaffCards] = useState([]) // For council page
    const [captainsCards, setCaptainsCards] = useState([])
    const [exploreCards, setExploreCards] = useState([]) // For explore page

    useEffect(() => {
        const fetchEvents = async () => {
            const firestore = firebase.firestore();

            const eventCollection = await firestore.collection("events").get();
            setEventSlides(
                eventCollection.docs.map((doc) => {
                    const docData = doc.data();
                    return <SliderCard key={doc.id} data={docData} heading={"EVENTS"}/>;
                })
            );

            setAnnouncementCollection(await firestore.collection("announcements").get())
            setHallOfFameCollection(await firestore.collection("awardees").get())
            const staffCollection = await firestore.collection("staff").get();
            let tempCards = []
            staffCollection.docs.forEach((doc) => {
                const docData = doc.data();
                tempCards.push(
                    <CouncilStaffCard
                        key={doc.id}
                        name={docData.name}
                        image={docData.imageUrl}
                        position={docData.position}
                        email={docData.email}
                    />
                );
            });
            setStaffCards(tempCards);

            const captainsCollection = await firestore.collection("captains").get()
            tempCards = []
            captainsCollection.docs.forEach((doc) => {
                const docData = doc.data();
                tempCards.push(
                    <CouncilCaptainCard
                        key={doc.id}
                        name={docData.name}
                        image={docData.imageUrl}
                        position={docData.position}
                        email={docData.email}
                    />
                )
            })
            setCaptainsCards(tempCards)

            const exploreCollection = await firestore.collection("explorePage").get();
            tempCards = []
            let counter = 0;
            exploreCollection.docs.forEach((doc) => {
                const docData = doc.data();
                tempCards.push(
                    <ExploreCard key={doc.id} text={docData.text} imageUrl={docData.imageUrl} alignment={counter % 2}/>
                );
                counter += 1;
            });
            setExploreCards(tempCards)
        }
        fetchEvents()
            .then(() => setLoading(false))
            .catch((err) => console.log(err));
    }, []);
    return (
        loading ?
            <Loader loading={true} color={"#5a5a9f"} css={{position: "fixed", top: "50%", left: "50%"}}/> :
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path={"/"} render={() =>
                        <Home announcementCollection={announcementsCollection}
                              eventSlides={eventSlides}
                        />}/>
                    <Route exact path={"/council"} render={() =>
                        <Council staffCards={staffCards}
                                 captainsCards={captainsCards}
                        />}/>
                    <Route exact path={"/hallOfFame"} render={() =>
                        <HallOfFame hallOfFameCollection={hallOfFameCollection}
                        />}/>
                    <Route exact path={"/explore"} render={() =>
                        <Explore exploreCards={exploreCards}/>}/>
                </Switch>
                <Footer/>
            </Router>
    );
}

export default App;
