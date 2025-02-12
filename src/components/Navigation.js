import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

//  Context
import { CartContext } from '../contexts/CartContext.js';

const Navigation = () => {
	const { cart } = useContext(CartContext);
	// console.log("cart: ", cart);
	// console.log("cart.length: ", cart.length);

	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
