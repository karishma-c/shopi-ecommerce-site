import React, { useState } from 'react';
import ReactDOM  from 'react';
import sunscreen from './../images/sunscreen.png';
import foundation from './../images/foundation.png';
import nailcolorRemove from './../images/nailcolor-remover.png';
// import instaEyeliner from './../images/insta-eyeliner.png';
// import facePack from './../images/sheet-facepack.png';
import shineEyeliner from './../images/shine-eyeliner.png';
import './../styles/Productscontainer.css';
import Modal from './Modal';
// import { Modal } from 'bootstrap';


const Productscontainer = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div id="main">
            <div className="Products-container" onLoad={showProducts}>
                <div className="Product-card" data-itemType="powder">
                    <div className="Product" >
                        <div className="Product-image">
                            <img src={sunscreen} alt="img" />
                        </div>
                        <div className="Product-details">
                            <h3 className="Product-name">Face Powder With Sunscreen</h3>
                            <h4 className="Product-price">$500</h4>
                            
                        </div>
                    </div>
                    <h5 className="Add-button">Add to Cart</h5>
                </div>
                <div className="Product-card" data-itemType="cream">
                    <div className="Product" >
                        <div className="Product-image">
                            <img src={foundation} alt="img" />
                        </div>
                        <div className="Product-details">
                            <h3 className="Product-name">Weightless Mousse Foundation</h3>
                            <h4 className="Product-price">$350</h4>
                            
                        </div>
                    </div>
                    <h5 className="Add-button">Add to Cart</h5>
                </div>
                <div className="Product-card" data-itemType="nailcolor">
                    <div className="Product">
                        <div className="Product-image">
                            <img src={nailcolorRemove} alt="img" />
                        </div>
                        <div className="Product-details">
                            <h3 className="Product-name">Nail Color Remove</h3>
                            <h4 className="Product-price">$120</h4>
                            
                        </div>
                    </div>
                    <h5 className="Add-button">Add to Cart</h5>
                </div>
                <div className="Product-card" data-itemType="shineliner">
                    <div className="Product">
                        <div className="Product-image">
                            <img src={shineEyeliner} alt="img" />
                        </div>
                        <div className="Product-details">
                            <h3 className="Product-name">Absolute Shine Line Eye Liner</h3>
                            <h4 className="Product-price">$750</h4>
                        
                        </div>
                    </div>
                    <h5 className="Add-button">Add to Cart</h5>
                </div> 
            </div>   

            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                
            </Modal>
            {/* <div id="myModal"  className="modal">
                <div id="modal-content" className="modalContent" >
                    <span id="close" className="closeIcon" onClick={hideModal}>&times;</span>
                    <div className="modalContainer">
                        
                        <div className="modalImage">
                           <img id="modalimage" className="image" src="" alt="image"></img>
                        </div>
                        
                            <h2 id="modalproductN"></h2>
                            <h3 id="modalproductP"></h3>
                    
                    </div>
                </div>
            </div> */}
        </div>  
    )

    function showProducts() {
        const addToCartBtn = document.querySelectorAll(".Add-button");
        const productCard = document.querySelectorAll(".Product");
        addToCartBtn.forEach(addBtn => {
            addBtn.addEventListener('click', () => { 
                console.log("clicked");
                // showMessage();
                // setTimeout(showMessage, 4000);
                addBtn.innerHTML = "Visit Cart";
                addBtn.removeAttribute("className", "Add-button")
                addBtn.setAttribute("id", "View-button");
                const visitCartBtn = document.querySelectorAll("#View-button");
                visitCartBtn.forEach(visitBtn => {
                    visitBtn.addEventListener('click', () => {
                        setIsOpen(true);
                    })
                })
            })
        }); 
        
    }
   
    // function showMessage() {
    //     let messageBox = `<div className="message-box">
    //         <h3 className="toast-message">Item is added to the cart!</h3>
    //     </div>`;
    //     let main = document.getElementById("main")[0];
    //     main.appendChild(messageBox);
    // }
    // function hideModal() {
    //     let modal = document.getElementById("myModal");
    //     modal.style.display = "none";
    // }
}

export default Productscontainer;




// console.log(products);
// const container = document.getElementsByClassName("Product-container");
// let productList = [];
// productList.push(products);
// console.log(productList);
// productList.forEach(element => {
//     let product = `<div class="Product-card">
//     <div class="Product-image">
//         <img src="${element.productimage}" alt="img">
//     </div>
//     <div class="Product-details">
//         <h3 class="Product-name">${element.productname}</h2>
//         <h4 class="Product-price">${element.productprice}</h4>
//         <h5 class="Add-button">Add to Cart</h5>
//     </div>
//     </div>`;
//     container.insertAdjacentHTML('beforeend', product);
//     console.log(element);
// })
