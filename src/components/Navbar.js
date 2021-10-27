import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import shopBag from './../images/shop-bag.svg';
import './../styles/Navbar.css';
import Home from './Home';
import Modal from './Modal';

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
                   <Link to="/cart"><h3 className="Cart-text" onClick={viewCart}>Cart</h3></Link>
                </div>
            </div>
            
        </div>
        
    )
    function viewCart() {
        
        <Modal open={isOpen} onClose={() => setIsOpen(false)} >
            <div className="modalContent">
                <div className="modalImage">
                    <img id="currentImage" src="" alt="image" />
                </div>
                <h3 id="Name">Empty</h3>
                <h3 id="Price">Empty</h3>
            </div>
        </Modal>
        
    }
    
}

export default Navbar;