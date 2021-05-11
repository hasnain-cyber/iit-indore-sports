import React, {useEffect, useState} from 'react';
import Navbar from "../../Navbar/Navbar"
import firebase from "../../../firebase";
import {PropagateLoader as Loader} from "react-spinners";
import ExploreCard from "../../ExploreCard/ExploreCard"
import './Explore.sass'

function Explore() {

    const [loading, setLoading] = useState(true)
    const [cardList, setCardList] = useState([])

    useEffect(() => {
        const firestore = firebase.firestore()
        const fetchEvents = async () => {

            const dataCollection = await firestore.collection('explorePage').get()

            const tempList = []
            let counter = 0
            dataCollection.docs.forEach(doc => {
                const docData = doc.data()
                tempList.push(<ExploreCard key={doc.id} text={docData.text} imageUrl={docData.imageUrl}
                                           alignment={counter % 2}/>)
                counter += 1
            })
            setCardList(tempList)
        }
        fetchEvents()
            .then(() => {
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    if (loading) {
        return (
            <Loader loading={true} color={'#5a5a9f'}
                    css={{position: "fixed", top: "50%", left: "50%"}}/>
        )
    } else {
        return (
            <div id='explorePageReturnWrapper'>
                <Navbar/>
                <video src={'/train.mp4'} autoPlay controls muted/>
                <div id="cardListReturnWrapper">
                    {cardList}
                </div>
            </div>
        )
    }
}

export default Explore