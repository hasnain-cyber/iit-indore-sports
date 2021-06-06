import React from "react";
import "./Council.sass";

function Council(props) {
    return (
        <div>
            <div id="councilReturnWrapper">
                <h1 className="councilHeader">STAFF MEMBERS</h1>
                <div className={"staff-cards-return-wrapper"}>{props.staffCards}</div>
                <h1 className="councilHeader">CAPTAINS</h1>
                <div className={"captains-cards-return-wrapper"}>{props.captainsCards}</div>
            </div>
        </div>
    );
}

export default Council;
