import React from 'react'
import './HomeSports.sass'
import SportComponent from "../SportComponent/SportComponent";

function HomeSports() {

    const sports = [
        ['CRICKET', '/images/cricket.jpg'],
        ['FOOTBALL', '/images/football.jpg'],
        ['BASKETBALL', '/images/basketball.jpg'],
        ['BADMINTON', '/images/badminton.jpg'],
        ['ATHLETICS', '/images/athletics.jpg'],
        ['TABLE TENNIS', '/images/table tennis.jpg'],
        ['TENNIS', '/images/tennis.jpg'],
        ['VOLLEYBALL', '/images/volleyball.jpg'],
        ['CHESS', '/images/chess.jpg'],
        ['YOGA AND FITNESS CLUB', '/images/yoga.jpg'],
        ['GYM', '/images/gym.jpg']
    ]

    const sportComponents = sports.map(sport=>{
        return(
            <SportComponent key={sport[0]} name={sport[0]} imageUrl={sport[1]}/>
        )
    })

    return (
        <div id='homeSportsReturnWrapper'>
            <h1>Sports</h1>
            {/*div for grid layout*/}
            <div>
                {sportComponents}
            </div>
        </div>
    )
}

export default HomeSports