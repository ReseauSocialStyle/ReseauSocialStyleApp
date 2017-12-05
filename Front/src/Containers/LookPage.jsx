import React from "react"
import "../style/lookPage.css"
import ClotheThumbnail from "../Components/ClotheThumbnail"

class LookPage extends React.Component {
    state = {
        name: "",
        description: "",
        image: '',
        clothes: []
    }

    render() {

        var clothesList = this.state.clothes.map((clothe, index) => {
            return (
                <ClotheThumbnail clothe={clothe} />
            )
        })
        return (
            <div id="look">
                <div id="look-information">
                    <img alt="" src={this.state.image} />
                    <p>{this.state.name}</p>
                </div>
                <p>{this.state.description}</p>
                <div id="clothes-list">
                    {clothesList}
                </div>
            </div>
        );
    }
}


export default LookPage;