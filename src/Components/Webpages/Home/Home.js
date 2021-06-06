import React from "react";
import HomeSportsAnnouncements from "../../HomeSports/HomeSportsAnnouncements";
import Slider from "react-slick";

import "./Home.sass";

function Home(props) {
    const settings = {
        arrows: true,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <div>
            <div id={"home-introduction-para"}>
                <h3 style={{fontFamily: "Zen Dots", marginBottom: "80px"}}>IIT INDORE SPORTS</h3>
                <p>
                    “The hardest skill to acquire in this sport is the one where you compete all out, give it all
                    you have, and you are still getting beat no matter what you do. When you have the killer
                    instinct to fight through that, it is very special.” – Eddie Reese{" "}
                </p>
            </div>
            {/*the events are shown here*/}
            <Slider {...settings}>{props.eventSlides}</Slider>
            {/*sport announcements are shown here*/}
            <HomeSportsAnnouncements announcementsCollection={props.announcementCollection}/>
        </div>
    )
}

export default Home;
