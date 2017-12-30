import React from 'react';
import { Link } from 'react-router-dom';

const WishlistItem = ({ name, id }) => (
    <li>
        <p>{name}</p>
        <Link to={`/wishlists/${id}`}>
            Test
        </Link>
    </li>
)       

export default WishlistItem;
