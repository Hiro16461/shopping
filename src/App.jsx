import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router';

function App() {
	const [products, setProducts] = useState([]);
	const [productsInCart, setProductsInCart] = useState([]);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((response) => response.json())
			.then((data) => setProducts(data));
	}, []);

	return (
		<>
			<Navbar />
			<Outlet context={[products, productsInCart, setProductsInCart]} />
		</>
	);
}

export default App;
