import React from "react";
import ClothesList from "./ClothesList"
import {  } from "./style/look.css";

const Look = (props) => {
    console.log("Look rendered");
    console.log("in Look : " + props.look.clothes);
    return (
        <div id="look-div">
            <div>
                <p>{props.look.name}</p>
                <p>{props.look.description}</p>
            </div>            
            <ClothesList clothes={props.look.clothes}/>
        </div>
    );
}

export default Look;