import React from 'react';
import ReactDOM  from 'react';
import Product from './Product';
import './../styles/Productscontainer.css';


const Productscontainer = (props) => {
    const { products } = props;
    return (
        <div id="main">
            <div className="Products-container">
                {products.map((product) => (
                    <Product key={product.id} product={product}></Product>
                ))}
            </div>   
        </div>  
    )
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
