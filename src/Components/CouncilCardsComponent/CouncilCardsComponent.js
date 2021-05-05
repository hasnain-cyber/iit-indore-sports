import React from 'react'
import CouncilCard from "../CouncilCard/CouncilCard";
import './CouncilCardsComponent.sass'

function CouncilCardsComponent(props) {

    const dataCards = props.dataList.map(item => <CouncilCard key={item[0]} name={item[0]} image={item[1]}
                                                              position={item[2]} email={item[3]}/>)

    return (
        <div id={'cardHandlerReturnWrapper'}>
            {dataCards}
        </div>
    )
}

export default CouncilCardsComponent