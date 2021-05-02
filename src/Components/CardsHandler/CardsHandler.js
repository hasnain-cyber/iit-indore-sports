import React from 'react'
import Card from "../Card/Card";
import './CardsHandler.sass'

function CardsHandler(props) {

    const dataCards = props.dataList.map(item => <Card name={item[0]} image = {item[1]} position={item[2]} email={item[3]}/>)

    return(
        <div id={'cardHandlerReturnWrapper'}>
            {dataCards}
        </div>
    )
}

export default CardsHandler