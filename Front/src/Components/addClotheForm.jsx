import React, { Component } from "react"
import { Button, Icon } from 'semantic-ui-react'

import './style/addClotheForm.css';
import ImageUpload from './ImageUpload.jsx';
import data from '../data'

class AddClotheForm extends Component {
    constructor(props) {
        super(props);

        this.validateForm = this.validateForm.bind(this);
        this.state = {
            title: '',
            brand: '',
            image: {},
            clothe: {},
            ...data,

        }

    }

    validateForm(e) {
        e.preventDefault();
        console.log(this.state);
        console.log("addClotheForm image " + this.state.image)

        let newState = {
            ...this.state,
            clothe: {
                name: this.state.title,
                brand: this.state.brand,
                image: JSON.stringify(this.state.image)
            }
        }
        this.setState(newState, console.log("clothe = " + this.state.clothe));


    }

    render() {
        return (
            <form id="add-clothe-form" onSubmit={this.validateForm}>

                <label>Nom</label>
                <input type="text" defaultValue={this.state.title} onChange={(event) => { this.setState({ title: event.target.value }) }}></input>

                <label>Marque </label>
                <input type="text" onChange={(event) => { this.setState({ brand: event.target.value }); }}></input>


                <div class="ui action input">
                    <input type="text" placeholder="File 1" readonly />
                    <input type="file" />
                    <div class="ui icon button">
                        <i class="attach icon"></i>
                    </div>
                </div>

                <label>Photo</label>
                <ImageUpload image={this.state.image} />

                <Button type="submit">Valider</Button>
            </form>
        )
    }
}


export default AddClotheForm;
