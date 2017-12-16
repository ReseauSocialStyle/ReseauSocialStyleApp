import React from "react"
import "../style/clotheThumbnail.css"

class ClotheThumbnail extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            name: props.clothe.name,
            image: props.clothe.img,
            brand: props.clothe.marque,
            size: props.clothe.taille
        }
    }         
    render() {
        let img_path = "/Front/sources/images/"
        return (
            <div class="clothe-thumbnail">
                <div class="clothe-image-div">
                    <img width="100" height="100" class="clothe-image" alt="" src={this.state.image} />
                </div>
                <div class="clothe-information">
                    <p>{this.state.name}</p>
                    <p>{this.state.brand}</p>
                    <p>{this.state.size}</p>
                </div>
                <img alt="" src="/Front/sources/images/red_cross.png" />
            </div>
        )

    }
}

export default ClotheThumbnail;
