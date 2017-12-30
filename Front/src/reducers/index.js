import { combineReducers } from 'redux';
import wishlists, * as fromWishlists from './wishlists';
import researches from './researches';

const reducers = combineReducers({
    wishlists,
    researches
})

export default reducers;

export const getWishlists = state => (
    fromWishlists.getWishlists(state.wishlists)
);

export const getWishlist = (state, id) => (
    fromWishlists.getWishlist(state.wishlists, id)
);