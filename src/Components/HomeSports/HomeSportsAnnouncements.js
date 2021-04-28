import React from "react";
import './HomeSportsAnnouncements.sass'
import firebase from "../../firebase";

class HomeSportsAnnouncements extends React.Component {

    constructor(props) {
        super(props)
        this.firestore = firebase.firestore()
        const fetchData = async () => {
            this.announcementsCollection = await this.firestore.collection('announcements').get()
        }
        fetchData()
            .then(() => {
                this.setState(
                    {
                        announcements:
                            this.announcementsCollection.docs.map(doc => {
                                    if (doc.data().name === this.state.selectedSport) {
                                        return <h3 className='announcementHeader'
                                                   key={doc.data().announcement}>{doc.data().announcement}</h3>
                                    }
                                    return null
                                }
                            )
                    }
                )
                const selectedIcon = document.getElementById(this.state.selectedSport)
                selectedIcon.style.width = '50px'
                selectedIcon.style.height = '50px'
                selectedIcon.style.background = '#a9cec2'
            })
            .catch(err => console.log(err))

        this.state = {
            selectedSport: 'cricket',
            announcements: []
        }
        this.handleImageClick = this.handleImageClick.bind(this)
    }

    handleImageClick(event) {

        let selectedIcon = document.getElementById(this.state.selectedSport)
        selectedIcon.style.width = '32px'
        selectedIcon.style.height = '32px'
        selectedIcon.style.background = 'transparent'

        selectedIcon = event.target
        selectedIcon.style.width = '50px'
        selectedIcon.style.height = '50px'
        selectedIcon.style.background = '#a9cec2'

        this.setState({
                selectedSport: event.target.id,
                announcements:
                    this.announcementsCollection.docs.map(doc => {
                            if (doc.data().name === event.target.id) {
                                return <h3 className='announcementHeader'
                                           key={doc.data().announcement}>{doc.data().announcement}</h3>
                            }
                            return null
                        }
                    )
            }
        )
    }

    render() {
        return (
            <div id='homeSportsReturnWrapper'>
                <h1>ANNOUNCEMENTS</h1>
                <div className="horizontal-sport">
                    <img id='cricket' className='sport-icon' src={'/Home-Sports-Icons/cricket.svg'}
                         onClick={this.handleImageClick} alt=''/>
                    <img id='football' className='sport-icon' src={'/Home-Sports-Icons/football.svg'}
                         onClick={this.handleImageClick} alt=''/>
                    <img id='basketball' className='sport-icon' src={'/Home-Sports-Icons/basketball.svg'}
                         onClick={this.handleImageClick} alt=''/>
                    <img id='badminton' className='sport-icon' src={'/Home-Sports-Icons/badminton.svg'}
                         onClick={this.handleImageClick} alt=''/>
                    <img id='volleyball' className='sport-icon' src={'/Home-Sports-Icons/volleyball.svg'}
                         onClick={this.handleImageClick} alt=''/>
                    <img id='athletics' className='sport-icon' src={'/Home-Sports-Icons/athletics.svg'}
                         onClick={this.handleImageClick} alt=''/>
                </div>
                <div id='sportAnnouncements'>
                    <h1>{this.state.selectedSport.toUpperCase()}</h1>
                    {this.state.announcements}
                </div>
                <div className="horizontal-sport">
                    <img id='gym' className='sport-icon' src={'/Home-Sports-Icons/gym.svg'}
                         onClick={this.handleImageClick}
                         alt=''/>
                    <img id='table tennis' className='sport-icon' src={'/Home-Sports-Icons/tt.svg'}
                         onClick={this.handleImageClick}
                         alt=''/>
                    <img id='tennis' className='sport-icon' src={'/Home-Sports-Icons/tennis.svg'}
                         onClick={this.handleImageClick}
                         alt=''/>
                    <img id='yoga' className='sport-icon' src={'/Home-Sports-Icons/yoga.svg'}
                         onClick={this.handleImageClick}
                         alt=''/>
                    <img id='chess' className='sport-icon' src={'/Home-Sports-Icons/chess.svg'}
                         onClick={this.handleImageClick}
                         alt=''/>
                </div>
            </div>
        )
    }


}

export default HomeSportsAnnouncements