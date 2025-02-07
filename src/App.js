import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Context 
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
		console.log("Added item: ", item);
		// console.log("item.id", item.id);
	};

	const removeItem = (itemId) => {
		console.log("Remove item id: ", itemId);
		// console.log("titletest: ", titleTest);
		setCart(cart.filter((index) => index.id !== itemId));
	}

	
		

	return (
		<ProductContext.Provider value={{products, addItem}}>
		<CartContext.Provider value={{cart, removeItem}}>

		 <div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<Route
				exact
				path="/"
				component={Products}
			/>

			<Route
				path="/cart"
				component={ShoppingCart}
			/>

		 </div>
		 </CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
