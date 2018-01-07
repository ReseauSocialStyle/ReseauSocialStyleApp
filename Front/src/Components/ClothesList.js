import React, { Component } from "react";
import Clothe from "./Clothe"

const ClothesList = (props) => {
    console.log("Clothes List : " + props.clothes);
    if (props.clothes) {
        return (
            <ul>
                {

                    props.clothes && props.clothes.map(cl => <Clothe clothe={cl} />)
                }

            </ul>
        );
    }
    else
    {
        return (<div></div>);
    }
}

export default ClothesList;