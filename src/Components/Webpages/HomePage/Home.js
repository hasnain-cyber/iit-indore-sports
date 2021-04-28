import React from "react"
import Navbar from "../../Navbar/Navbar";
import HomeIntroduction from "../../HomeIntroduction/HomeIntroduction";
import HomeEvents from "../../HomeEvents/HomeEvents";
import Footer from "../../HomeFooter/HomeFooter";
import HomeSportsAnnouncements from "../../HomeSports/HomeSportsAnnouncements";

function Home() {

    return (
        <div>
            <Navbar/>
            <HomeIntroduction/>
            <HomeEvents/>
            <HomeSportsAnnouncements/>
            <Footer/>
        </div>
    )
}

export default Home