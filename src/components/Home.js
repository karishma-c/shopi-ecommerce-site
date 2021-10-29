import React from 'react';
import Navbar from './Navbar';
import Product from './Product';
import Productscontainer from './Productscontainer';
import data from './data';

const Home = () => {
    const { products } = data;
    return (
        <div className="Main-container">
            <Navbar/>
            <Productscontainer products={products}/>
        </div>
    )
}

export default Home;