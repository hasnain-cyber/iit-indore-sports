import React from 'react'
import './CouncilStaffCard.sass'

function CouncilStaffCard(props) {
    return (
        <article className="staff-card">
            <aside>{props.position.toUpperCase()}</aside>
            <main>
                <img id={'cardImage'} src={props.image} alt=''/>
                <h1 id={'nameHeader'}>{props.name.toUpperCase()}</h1>
                <h4 id={'cardEmailHeader'}>EMAIL</h4>
                <a id={'cardEmailAnchor'} href={`mailto:${props.email}`}>
                    <h4 id={'cardEmail'}>{props.email}</h4>
                </a>
            </main>
        </article>
    )
}

export default CouncilStaffCard