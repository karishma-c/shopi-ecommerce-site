import React, { useState } from 'react';
import { render } from 'react-dom';
import Cart from './Cart';
import './../styles/Productscontainer.css';

const Product = (props) => {
    const { product } = props;
    const [cartItems, setCartItems] = useState([]);
    
    return (
        <div>
            <div id="message-box">
               <span id="close" className="close-Icon" onClick={hideToast}>&times;</span>
               <h3 className="toast-message"></h3>
            </div>
            <div className="Product-card" onLoad={showProducts}>
                <div className="Product-image">
                   <img className="Image" src={product.image} alt="image" />
                </div>
                <h3 className="Product-name">{product.name}</h3>
                <h4 className="Product-price">${product.price}</h4>
                <div>
                    <button className="Add-button">Add to Cart</button>
                </div>
            </div>

        </div>
        
    )

    function showProducts() {
        const addToCartBtn = document.querySelectorAll(".Add-button");
        addToCartBtn.forEach(addBtn => {
            addBtn.addEventListener('click', () => {
                if(addBtn.innerHTML == "Add to Cart"){
                    showMessage("Item added to the Cart!!");
                    setTimeout(hideToast, 3000);
                } 
                addBtn.innerHTML = "Visit Cart";
                addBtn.removeAttribute("className", "Add-button")
                addBtn.setAttribute("id", "View-button");
                const visitCartBtn = document.querySelectorAll("#View-button");
                visitCartBtn.forEach(visitBtn => {
                    visitBtn.addEventListener('click', () => {
                        render (
                           <Cart cartItems={cartItems} />, document.getElementById("root")
                        );
                    })
                })
            })
        }); 
    }

    function showMessage(text) {
        let toaster = document.getElementById("message-box");
        let message = document.querySelector(".toast-message");
        let closeBtn = document.getElementById("close");
        message.textContent = text;
        toaster.style.display = "block";
        closeBtn.addEventListener("click" , () => {
            setTimeout(
                hideToast
            , 0);
        })
    }
 
    function hideToast() {
        let toaster = document.getElementById("message-box");
        toaster.style.display = "none";
    }
     
}

export default Product;