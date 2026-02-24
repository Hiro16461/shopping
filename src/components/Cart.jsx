import styles from '../style/cart.module.css';
import CardCard from './CartCard';
import { useOutletContext } from 'react-router';

const Cart = () => {
	const [products, productsInCart, setProductsInCart] = useOutletContext();

	let totalPrice = 0;
	productsInCart.forEach((product) => {
		totalPrice += products[product.id - 1].price * product.qty;
	});

	return (
		<div className={styles.body}>
			<div className={styles.details}>
				<div className={styles.headings}>
					<h2>Your Cart</h2>
					<p>Ready to complete your purchase?</p>
				</div>

				<div className={styles.product}>
					{productsInCart.map((product) => (
						<CardCard
							product={products[product.id - 1]}
							productsInCart={productsInCart}
							setProductsInCart={setProductsInCart}
						/>
					))}
				</div>
			</div>

			<div className={styles.summary}>
				<h3>Order Summary</h3>
				<div className={styles.row}>
					<span>Subtotal</span>
					<span>${totalPrice.toFixed(2)}</span>
				</div>
				<button className={styles.checkoutBtn}>Proceed to Checkout -</button>
			</div>
		</div>
	);
};
export default Cart;
