import React from 'react';
import { Route } from 'react-router-dom';
import PageTitle from './PageTitle';
import WishlistList from '../Containers/WishlistList';
import AddWishlist from '../Containers/AddWishlist';
import Wishlist from '../Containers/Wishlist';

const WishlistsPage = () => (
    <div>
        <Route exact path="/wishlists" render={() => (
            <div>
                <PageTitle title="wishlists"/>
                <AddWishlist />
                <WishlistList />
            </div>
        )}/>
        <Route path="/wishlists/:id" component={Wishlist}/>
    </div>
)

export default WishlistsPage;