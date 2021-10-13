import React from 'react';
import shopBag from './../images/shop-bag.svg';
import './../styles/Navbar.css';

const Navbar = () => {
    
    return (
        <div className="Nav-bar" >
            <div className="Logo">
                <h2 className="Logo-text">Shopi</h2>
            </div>
            <div className="Cart-section">
                <img className="Cart-img" src={shopBag} alt="bagImage" />
                <h3 className="Cart-text">Cart</h3>
            </div>
        </div>
    )
}

export default Navbar;