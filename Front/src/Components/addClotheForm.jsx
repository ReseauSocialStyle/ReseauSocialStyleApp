import React, { Component } from "react"
import { jsonfile } from "jsonfile";
import {UploadManager, UploadHandler} from "react-file-uploader"

class AddClotheForm extends Component {
    state = {
        title: '',
        brand: '',
        img: {},
    }

    addClothe(event) {
 
    }

    render() {
        return (
            <form id="add-clothe-form" onSubmit={this.addClothe}>
                <div id="clothe-title form-div">
                    <label>Nom</label>
                    <input onChange={(target) => { this.Setstate (this.state.title,target.value)}}></input>
                </div>

                <div id="clothe-brand form-div">
                    <label>Marque </label>
                    <input onChange={(target) => { this.Setstate(this.state.brand,target.value) }}></input>
                </div>
                <div id="image-upload form-div">
                    <label>Photo</label>
                    <UploadManager>
                        files.map(file =>{
                            <UploadHandler
                                key={this.state.img.id}
                                file={this.state.img}
                                autoStart={true} />
                        })
                    </UploadManager>
                </div>

                <button type="submit">Valider</button>
            </form>
        )
    }
}


export default AddClotheForm;
