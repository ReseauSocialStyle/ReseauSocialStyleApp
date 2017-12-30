import { v4 } from 'node-uuid';


export const addWishlist = (name) => ({
    type: 'ADD_WISHLIST',
    id: v4(),
    name
});

export const removeClotheFromWishlist = (id) => ({
    type: 'REMOVE_CLOTHE_FROM_WISHLIST',
    id
});

export const addClotheToWishlist = (wishlistId, clotheId) => ({
    type: 'ADD_CLOTHE_TO_WISHLIST',
    wishlistId,
    clotheId
});