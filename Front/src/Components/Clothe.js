import React from "react";
import form from "./style/clothe.css"

const Clothe = (props) => {
    return (
        <div className="clothe-thumbnail">
            <div>
                <img alt="" src={props.clothe.url} />
            </div>
            <div>
                <p>{props.clothe.name}</p>
            </div>
        </div>
    )
}

export default Clothe;