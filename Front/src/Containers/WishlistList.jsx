import React from 'react';
import { connect } from 'react-redux';
import { getWishlists } from '../reducers';
import WishlistItem from '../Components/WishlistItem';

const WishlistList = ({ wishlists }) => (
    <div>
        <h3>Wishlists</h3>
        <ul>
            {wishlists.map(({ id, name }) =>
                <WishlistItem
                    key={id}
                    id={id}
                    name={name}
                />
            )}
        </ul>
    </div>
)

const mapStateToProps = state => ({
    wishlists: getWishlists(state)
});

export default connect(
    mapStateToProps
)(WishlistList);