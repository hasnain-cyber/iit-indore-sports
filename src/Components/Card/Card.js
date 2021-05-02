import React from 'react'
import './Card.sass'

function Card(props) {
    return (
        <article className="card">
            <aside>{props.position.toUpperCase()}</aside>
            <main>
                <img id={'cardImage'} src={props.image} alt=''/>
                <h1 id={'nameHeader'}>{props.name.toUpperCase()}</h1>
                <h4 id={'cardEmailHeader'}>EMAIL</h4>
                <h4 id={'cardEmail'}>{props.email}</h4>
            </main>
        </article>
    )
}

export default Card