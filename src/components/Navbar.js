import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import shopBag from './../images/shop-bag.svg';
import './../styles/Navbar.css';
import Cart from './Cartcontainer';

const Navbar = () => {
    
    return (
        <div>
            <div className="Nav-bar" >
                <div className="Logo">
                    <h2 className="Logo-text"><Link to="/">Shopi</Link></h2>
                </div>
                <div className="Cart-section">
                    <img className="Cart-img" src={shopBag} alt="bagImage" />
                    <h3 className="Cart-text" onClick={showCart}><Link to="/cart">Cart</Link></h3>
                </div>
            </div>
            
        </div>
    )
    
    function showCart() {
        ReactDOM.render(
            <Cart />,
            document.getElementById("root")
        );
    }
}

export default Navbar;