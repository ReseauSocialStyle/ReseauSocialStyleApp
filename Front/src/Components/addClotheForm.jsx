import React, { Component } from "react"
import { jsonfile } from "jsonfile";
import Files from 'react-files';
import all from './style/addClotheForm.css';

class AddClotheForm extends Component {
    state = {
        title: '',
        brand: '',
        img: {},
    }

    onClotheUpload = function(files) {
        console.log(files);
        // const file = files[0];
        // console.log(file);
    }

    onFilesError(error, file) {
        console.log(error);
    }

    validateForm(event) {

    }

    render() {
        return (
            <form id="add-clothe-form" onSubmit={this.addClothe}>

                <label>Nom</label>
                <input type="text" onChange={(target) => { this.Setstate(this.state.title, target.value) }}></input>

                <label>Marque </label>
                <input type="text" onChange={(target) => { this.Setstate(this.state.brand, target.value) }}></input>


                <label>Photo</label>
                   <input type="file" onChange={this.onClotheUpload}/>
                   <img src={this.state.img.src}/>

                <input type="submit"></input>
            </form>
        )
    }
}


export default AddClotheForm;
