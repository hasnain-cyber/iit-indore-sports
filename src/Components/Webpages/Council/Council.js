import React from 'react'
import './Council.sass'
import Navbar from "../../Navbar/Navbar";
import CouncilCardsComponent from "../../CouncilCardsComponent/CouncilCardsComponent";

class Council extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            staffData: [
                ['Lalit Borana', '/Staff-Photos/Lalit-Borana.PNG', 'Sports Convener', 'Lalitborana@IITI.ac.in'],
                ['Renchu. T', '/Staff-Photos/Renchu-T.jpg', 'Sports Officer', 'Sportsofficer@IITI.ac.in'],
                ['Bipin Kumar', '/Staff-Photos/Bipin-Kumar.PNG', 'Sports Secretary', 'gs.sports@IITI.ac.in']
            ],
            captainsData: [
                ['Sukesh', '/Captain-Photos/Sukesh.jpg', 'Athletics', 'atheletics@IITI.ac.in'],
                ['Manav Trivedi', '/Captain-Photos/Manav Trivedi.jpg', 'Badminton', 'badminton@IITI.ac.in'],
                ['Samarth Anand', '/Captain-Photos/Samarth Anand.jpg', 'Basketball', 'basketball@IITI.ac.in'],
                ['Rohit Bankar', '/Captain-Photos/Rohit Bankar.jpg', 'Chess', 'chess@IITI.ac.in'],
                ['Aditya Sharma', '/Captain-Photos/Aditya Sharma.jpg', 'Cricket', 'cricket@IITI.ac.in'],
                ['Soham Kapileshwar', '/Captain-Photos/Soham Kapileshwar.jpg', 'Soccer', 'soccer@IITI.ac.in'],
                ['Aadish', '/Captain-Photos/Aadish.PNG', 'Table Tennis', 'tabletennis@IITI.ac.in'],
                ['Govind Agrawal', '/Captain-Photos/Govind Agrawal.jpg', 'Tennis', 'tennis@IITI.ac.in'],
                ['Uday Vankdavat', '/Captain-Photos/Uday Vankdavat.png', 'Volleyball', 'volleyball@IITI.ac.in']
            ]
        }
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div id='hallOfFameReturnWrapper'>
                    <h1 className='councilHeader'>STAFF MEMBERS</h1>
                    <CouncilCardsComponent dataList={this.state.staffData}/>
                    <h1 className='councilHeader'>CAPTAINS</h1>
                    <CouncilCardsComponent dataList={this.state.captainsData}/>
                </div>

            </div>
        )
    }
}

export default Council