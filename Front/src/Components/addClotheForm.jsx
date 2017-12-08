import React, { Component } from "react"
import { fs } from "fs";
import './style/addClotheForm.css';
import ImageUpload from './ImageUpload.jsx';

class AddClotheForm extends Component {
    constructor(props){
        super(props);
        this.validateForm = this.validateForm.bind(this);
        this.state = {
            title: '',
            brand: '',
            image: {},
            clothe: {}
    }
    
    }

    registerClothe (clothe){
        var registered = localStorage.getItem("clothes")
    }

    validateForm(e) {
        e.preventDefault();
        console.log(this.state);
        console.log("addClotheForm image " + this.state.image)
         var file = './data.json';
        this.setState({clothe : {
            name: this.state.title,
            brand: this.state.brand,
            image: JSON.stringify(this.state.image)
        }}, console.log("clothe = " + this.state.clothe));
        


    }

    render() {
        return (
            <form id="add-clothe-form" onSubmit={this.validateForm}>

                <label>Nom</label>
                <input type="text" onChange={(event) => { this.setState({title : event.target.value}) }}></input>

                <label>Marque </label>
                <input type="text" onChange={(event) => { this.setState({brand: event.target.value});}}></input>


                <label>Photo</label>
                <ImageUpload image={this.state.image}/>
                {/* <ReactFileReader handleFiles={this.onClotheUpload}>
                    <button className='btn'>Choisissez une image</button>
                </ReactFileReader> */}
                {/* <input ref="file"
                    type="file"
                    name="user[image]"
                    multiple="true"
                    onChange={this.onClotheUpload}></input>
                <img src={this.state.imgSrc} alt="" /> */}

                <button type="submit">Valider</button>
            </form>
        )
    }
}


export default AddClotheForm;
