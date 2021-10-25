import React from 'react';
import Navbar from './Navbar';

const Cart = () => {
    
    return (
        <div>
            <Navbar></Navbar>
            <div className="Cart" >
                <div className="Cart-content">
                    <h2 className="Cart-text">"Empty"</h2>
                </div>
            </div>
        </div>
        
        
    )
}

export default Cart;