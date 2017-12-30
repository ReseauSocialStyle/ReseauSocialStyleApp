import React from 'react';
import { connect } from 'react-redux';
import { addClotheToWishlist, searchClothesByName } from '../actions';
import { getWishlist } from '../reducers';

let Wishlist = ({ dispatch, wishlist, addClothe, searchClothe }) => {
    let clothes = wishlist.clothes;
    return (
        <div>
            <button onClick={() => addClothe(wishlist.id, 'test-clothe-id')}>Ajouter un vêtement</button>
            <button onClick={() => searchClothe('clothe1')}>Rechercher un vêtement</button>
            <p>{wishlist.name}</p>
            {!clothes.length ? (
                <p>Cette wishlist est vide :(</p>
            ) : (
                <ul>
                    {clothes.map(clothe =>
                        <li>{clothe}</li>
                    )}
                </ul>
            )}
        </div>
    );
}

const mapStateToProps = (state, { match }) => ({
    wishlist: getWishlist(state, match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
    addClothe: (wishlistId, clotheId) => {
        dispatch(addClotheToWishlist(wishlistId, clotheId))
    },
    searchClothe: (research) => {
        dispatch(searchClothesByName(research))
    }
})

Wishlist = connect(
    mapStateToProps,
    mapDispatchToProps
)(Wishlist);

export default Wishlist;
