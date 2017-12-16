import React, { Component } from "react";
import LookCreationForm from "../Components/LookCreationForm";
import Look from "../Components/Look";  

class LookCreationPage extends React.Component {

state ={
    look:{}
}

createLook = (newLook) =>{
    this.setState({look : newLook});
    // this.st({look : newLook});
    console.log ("LookCreationPage newLook : " + newLook)
    console.log ("LookCreationPage look : " + this.state.look)
}
    render() {
        return (
            <div>
                <LookCreationForm handleLookCreation={this.createLook}/>
                <Look look={this.state.look}/>
            </div>
        )
    }
}

export default LookCreationPage;