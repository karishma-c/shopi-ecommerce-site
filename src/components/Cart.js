import React from 'react';
import ReactDom from 'react-dom';
import './../styles/Cart.css';
// import Home from './Home';


const Cart = (props) => {
    const { cartItems } = props;
    return (
        <aside className="cart-container">
            <div>
               {cartItems.length === 0 && <div>Cart is Empty!!</div>}
            </div>
        </aside>
    )
}

export default Cart;