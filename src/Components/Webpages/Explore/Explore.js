import React from "react";
import "./Explore.sass";

function Explore(props) {
    return (
        <div id="explorePageReturnWrapper">
            <video src={"/train.mp4"} autoPlay controls muted/>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto eius eos, fuga fugiat inventore
                quasi ullam vero? Ad autem blanditiis commodi consectetur debitis, distinctio, dolorum excepturi
                magni non repellendus voluptas?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                deleniti dolore esse, eveniet ex excepturi fugit incidunt itaque iusto laboriosam maiores maxime
                modi molestiae pariatur quod sapiente sequi suscipit, unde. Lorem ipsum dolor sit amet
            </p>
            <div id="cardListReturnWrapper">{props.exploreCards}</div>
        </div>
    );
}

export default Explore;
