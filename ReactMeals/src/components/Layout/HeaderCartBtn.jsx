import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartBtn.module.css';
import CartContext from '../../context/cart-context';
import { useContext } from 'react';

const HeaderCartBtn = (props) => {
	const cartCtx = useContext(CartContext);

	const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
		return currNumber + item.amount;
	}, 0);

	return (
		<button className={classes.button} onClick={props.onClick}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCartBtn;
