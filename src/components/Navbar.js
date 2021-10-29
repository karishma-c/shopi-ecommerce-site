import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import shopBag from './../images/shop-bag.svg';
import './../styles/Navbar.css';
import Cart from './Cart';
// import Home from './Home';
// import Cart from './Cart';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        
        <div >
            <div className="Nav-bar" >
                <div className="Logo">
                    <h2 className="Logo-text">Shopi</h2>
                </div>
                <div className="Cart-section" >
                   <img className="Cart-img" src={shopBag} alt="bagImage" />
                   <a href="#/cart"><h3 className="Cart-text" onClick={viewCart}>Cart</h3></a>
                </div>
            </div>
            
        </div>
        
    )
    function viewCart() {
       <Cart></Cart>
    }
    
}

export default Navbar;