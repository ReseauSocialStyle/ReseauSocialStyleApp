import React from "react"
import "../style/lookPage.css"
import ClotheThumbnail from "../Components/ClotheThumbnail"

class LookPage extends React.Component {
    state = {
        look : {
            "name":"gothic",
            "img" : "gothic.jpg",
            "description":"Super look",
            "clothes":[
                {
                    "name":"robe noire",
                    "marque":"H&M",
                    "img":"http://www.1-2-3.com/dw/image/v2/AAWW_PRD/on/demandware.static/-/Sites-UPAP-master/default/dw165227f3/648768307_a.jpg?sw=430&sh=546",
                    "taille":"S"
                },
                {
                    "name":"pantalon noir",
                    "img":"https://www.decathlon.fr/media/815/8155549/big_a2537b36c76844a5aaf8be609b9be8d5.jpg",
                    "marque":"H&M",
                    "taille":"S"
                },
                {
                    "name":"T-shirt Noir",
                    "img":"https://www.decathlon.fr/media/835/8350564/big_63912709395c4b10a5d0530463910256.jpg",
                    "marque":"Hot Topics",
                    "taille":"XS"
                },
                {
                    "name":"collier crânes",
                    "img":"https://myrebelshop.com/wp-content/uploads/2016/07/collier-gothique-tete-de-mort-argent-metal.jpg",
                    "marque":"Hot Topics",
                    "taille":""
                }
            ]
        }
    }

    render() {
        var clothesList = this.state.look.clothes.map((clothe, index) => {
            return (
                <ClotheThumbnail clothe={clothe} />
            )
        })
        return (
            <div id="look">
                <div id="look-information">
                    <img alt="" src={this.state.look.img} />
                    <p>{this.state.look.name} TOTO</p>
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