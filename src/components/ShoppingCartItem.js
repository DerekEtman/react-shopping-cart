import React,{ useContext } from 'react';

// Context
import {CartContext} from '../contexts/CartContext';

// 

const Item = props => {
	const { cart } = useContext(CartContext);

	console.log("No. of items in cart: ",cart.length);
	console.log("Items in cart", cart);


	const removeItem = (itemId) => {
		console.log("Remove item id: ", itemId);
		// console.log("titletest: ", titleTest);
		// setCart([...cart, cart.filter((index) => index !== itemId)]);

	}


	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={e => removeItem(props.id)}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
