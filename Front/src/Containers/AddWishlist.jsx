import React from 'react';
import { connect } from 'react-redux';
import { addWishlist } from '../actions';

let AddWishlist = ({ dispatch }) => {
    let input;

    let submit = e => {
        e.preventDefault();
        if (!input.value.trim()) {
            return;
        }
        dispatch(addWishlist(input.value));
        input.value = '';
    }

    return (
    <div>
        <form onSubmit={submit}>
            <label>Nom de la wishlist</label>
            <input type="text" ref={ node => input = node } />
            <button type="submit">Add Wishlist</button>
        </form>
    </div>
    );
}

AddWishlist = connect()(AddWishlist);

export default AddWishlist;