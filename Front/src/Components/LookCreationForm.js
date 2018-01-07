import React, { Component } from "react";
import form from "./style/LookCreationForm.css"

export default class LookCreationForm extends Component {
    state = {
        lookName: '',
        description: '',
        clothes: [],
        look: {}
    };



    addClothes = (event) => {
        this.setState({
            clothes: [
                {
                    name: 'pull',
                    size: 's',
                    brand: 'H&M',
                    color: 'black',
                    url:"https://www.misterfashion.fr/content/pdtimg_2983491s.jpg"
                },
                {
                    name: 'dress',
                    size: 's',
                    brand: 'Zara',
                    color: 'Blue',
                    url : "https://www.tendances-de-mode.com/images/upload/1439227091.jpg"
                },
                {
                    name: 'skirt',
                    size: 's',
                    brand: 'Pull&Bear',
                    color: 'Green',
                    url:"https://cdn.lookastic.fr/jupe-patineuse-verte-original-1483521.jpg"
                },
                {
                    name: 'T-Shirt',
                    size: 's',
                    brand: 'Zadig&Voltaire',
                    color: 'white',
                    url:"http://www.tshirt-serigraphie.fr/static/img/produits/13/V-NECK%20T-SHIRT%20BLANC_BIG.jpg"
                }
            ]
        },
            () => {
                console.log(this.state.clothes);
                console.log("clothes created")
            });

    }

    createLook = (event) => {
        event.preventDefault();
        this.setState({
            look: {
                name: this.state.lookName,
                description: this.state.description,
                clothes: this.state.clothes
            }
        },
            () => {
                console.log("create look in form : " + this.state.look);
                this.props.handleLookCreation (this.state.look);
            });
    }

    render() {
        return (
            <div>
                <form id="look-creation-form" onSubmit={this.createLook}>
                    <div className="form-2-parts">
                        <label className="col-1" >Look name :</label>
                        <input className="col-2" onChange={(event) => this.setState({ lookName: event.target.value })} required />
                    </div>
                    <button id="add-clothes-btn" onClick={this.addClothes} type="button" label="Add clothes" value="Add clothes"> Add clothes</button>
                    <textarea className="totalPlace" placeholder="Description" onChange={(event) => { this.setState({ description: event.target.value }) }} />
                    <button className="" type="submit"> Submit</button>
                </form>
            </div>
        );
    }
}