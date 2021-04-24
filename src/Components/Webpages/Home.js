import React from "react"
import Navbar from "../Navbar/Navbar";
import HomeIntroduction from "../HomeIntroduction/HomeIntroduction";
import HomeEvents from "../HomeEvents/HomeEvents";
import HomeSports from "../HomeSports/HomeSports";
import Footer from "../HomeFooter/HomeFooter";

function Home() {
    return(
        <div>
            <Navbar/>
            <HomeIntroduction/>
            <HomeEvents/>
            <HomeSports/>
            <Footer/>
        </div>
    )
}

export default Home