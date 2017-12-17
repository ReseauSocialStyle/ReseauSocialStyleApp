import React from "react"
import "../style/clotheThumbnail.css"
import { Label, Image, Button } from "semantic-ui-react"

class ClotheThumbnail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.clothe.name,
            image: props.clothe.img,
            brand: props.clothe.marque,
            size: props.clothe.taille
        }
        this.delete = this.delete.bind(this);
    }

    delete() {
        this.props.deleteFunction(this.state.name);
    }

    render() {
        let img_path = "/Front/sources/images/"
        return (
            <div class="clothe-thumbnail">
                {/* <k class="delete-icon" alt="" src="https://openclipart.org/download/267591/aaaacrosss.svg" /> */}
                <Button onClick={this.delete} class="delete-icon">Supprimer</Button>
                <div class="clothe-image-div">
                    <Image width="100" height="100" class="clothe-image" alt="" src={this.state.image} />
                </div>
                <div class="clothe-information">
                    <div class="info-text">
                        <Label>{this.state.name}</Label>
                        <Label>{this.state.brand}</Label>
                        <Label>{this.state.size}</Label>
                    </div>
                </div>
            </div>
        )

    }
}

export default ClotheThumbnail;
