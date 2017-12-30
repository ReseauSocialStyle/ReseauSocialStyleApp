const wishlist = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_WISHLIST':
            return {
                id: action.id,
                name: action.name,
                clothes: []
            };
        case 'REMOVE_WISHLIST':
        case 'ADD_CLOTHE_TO_WISHLIST':
            return {
                ...state,
                clothes: [...state.clothes, action.clotheId]
            }
        default:
            return state;
    }
}

const wishlists = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_WISHLIST':
            return {
                ...state,
                [action.id]: wishlist(state[action.id], action)
            };
            // return [
            //     ...state,
            //     wishlist(state, action)
            // ];
        case 'REMOVE_WISHLIST':
            // // let { [action.id]: deleted, ...newState } = state;
            // // return newState;

            // return [
            //     ...state.slice(0, action.id),
            //     ...state.slice(action.id + 1)
            // ];
        case 'ADD_CLOTHE_TO_WISHLIST':
            return {
                ...state,
                [action.wishlistId]: wishlist(state[action.wishlistId], action)
            }
        case 'REMOVE_CLOTHE_FROM_WISHLIST':
        default:
            return state;
    }
}
  
export default wishlists;

export const getWishlists = state => (
    Object.keys(state).map(id => state[id])
);
// export const getWishlists = state => state

export const getWishlist = (state, id) => state[id];

// export const getWishlist = (state, id) => (
//     state.filter(wishlist => wishlist.id === id)[0]
// );