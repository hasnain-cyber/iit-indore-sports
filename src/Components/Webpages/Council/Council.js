import React from 'react'
import './Council.sass'
import Card from "../../Card/Card";
import Navbar from "../../Navbar/Navbar";

function Council() {
    return (
        <div>
            <Navbar/>
            <div id='hallOfFameReturnWrapper'>
                <h1 className='councilHeader'>STAFF MEMBERS</h1>
                <div id='staffMembersWrapper'>
                    <Card name='Lalit Borana' image={'/Staff-Photos/Lalit-Borana.PNG'} position='Sports Convener'
                          email='Lalitborana@IITI.ac.in'/>
                    <Card name='Renchu. T' image={'/Staff-Photos/Renchu-T.jpg'} position='Sports Officer'
                          email='Sportsofficer@IITI.ac.in'/>
                    <Card name='Bipin Kumar' image={'/Staff-Photos/Bipin-Kumar.PNG'} position='Sports Secretary'
                          email='gs.sports@IITI.ac.in'/>
                </div>
                <h1 className='councilHeader'>CAPTAINS</h1>
                <div id='captainsWrapper'>
                    <Card name='Sukesh' image={'/Captain-Photos/Sukesh.jpg'} position='Athletics'
                          email='atheletics@IITI.ac.in'/>
                    <Card name='Manav Trivedi' image={'/Captain-Photos/Manav Trivedi.jpg'} position='Badminton'
                          email='badminton@IITI.ac.in'/>
                    <Card name='Samarth Anand' image={'/Captain-Photos/Samarth Anand.jpg'} position='Basketball'
                          email='basketball@IITI.ac.in'/>
                    <Card name='Rohit Bankar' image={'/Captain-Photos/Rohit Bankar.jpg'} position='Chess'
                          email='chess@IITI.ac.in'/>
                    <Card name='Aditya Sharma' image={'/Captain-Photos/Aditya Sharma.jpg'} position='Cricket'
                          email='cricket@IITI.ac.in'/>
                    <Card name='Soham Kapileshwar' image={'/Captain-Photos/Soham Kapileshwar.jpg'} position='Soccer'
                          email='soccer@IITI.ac.in'/>
                    <Card name='Aadish' image={'/Captain-Photos/Aadish.PNG'} position='Table Tennis'
                          email='tabletennis@IITI.ac.in'/>
                    <Card name='Govind Agrawal' image={'/Captain-Photos/Govind Agrawal.jpg'} position='Tennis'
                          email='tennis@IITI.ac.in'/>
                    <Card name='Uday Vankdavat' image={'/Captain-Photos/Uday Vankdavat.png'} position='Volleyball'
                          email='volleyball@IITI.ac.in'/>
                </div>
            </div>

        </div>
    )
}

export default Council