import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import shopBag from './../images/shop-bag.svg';
import './../styles/Navbar.css';
import Home from './Home';
import Cart from './Cartcontainer';

const Navbar = () => {
    
    return (
        
        <div>
            <div className="Nav-bar" >
                <div className="Logo">
                    <h2 className="Logo-text">Shopi</h2>
                </div>
                <div className="Cart-section">
                    <NavLink className="navbar-item" activeClassName="is-active" to="/">
                        Home
                    </NavLink>

                    <NavLink className="navbar-item" activeClassName="is-active" to="/cart">
                        <img className="Cart-img" src={shopBag} alt="bagImage" />
                        Cart
                    </NavLink>
                    
                    {/* <h3 className="Cart-text" onClick={showCart}>Cart</h3> */}
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