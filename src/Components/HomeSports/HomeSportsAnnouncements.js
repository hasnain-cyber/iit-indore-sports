import React from "react";
import './HomeSportsAnnouncements.sass'

class HomeSportsAnnouncements extends React.Component {

    constructor(props) {
        super(props)
        this.announcementsCollection = props.announcementsCollection

        const announcements = []
        this.announcementsCollection.forEach(doc => {
            if (doc.data().name === 'cricket') {
                announcements.push(
                    <div className={'announcement-wrapper'} key={doc.id}>
                        <h3 className='announcement'>{doc.data().announcement}</h3>
                    </div>
                )
            }
        })
        this.state = {
            selectedSport: 'cricket',
            announcements: announcements
        }

        this.handleImageClick = this.handleImageClick.bind(this)
    }

    componentDidMount() {
        const selectedIcon = document.getElementById('cricket') // initializing with cricket
        selectedIcon.style.width = '50px'
        selectedIcon.style.height = '50px'
        selectedIcon.style.background = '#a9cec2'
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

        const announcements = []
        this.announcementsCollection.docs.forEach(doc => {
            if (doc.data().name === selectedIcon.id) {
                // noinspection JSUnresolvedVariable
                announcements.push(
                    <div className={'announcement-wrapper'} key={doc.id}>
                        <h3 className='announcement'>{doc.data().announcement}</h3>
                    </div>
                )
            }
        })

        this.setState({
                selectedSport: event.target.id,
                announcements: announcements
            }
        )
    }

    render() {
        return (
            <div id='homeSportsReturnWrapper'>
                <h1 id={'announcementsHeader'}>ANNOUNCEMENTS</h1>
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