import React from "react";
import "./Council.sass";

function Council(props) {
    return (
        <div>
            <div id="councilReturnWrapper">
                <h1 className="councilHeader">STAFF MEMBERS</h1>
                <div className={"cardHandlerReturnWrapper"}>{props.staffCards}</div>
                <h1 className="councilHeader">CAPTAINS</h1>
                <div className={"cardHandlerReturnWrapper"}>{props.captainsCards}</div>
            </div>
        </div>
    );
}

export default Council;
