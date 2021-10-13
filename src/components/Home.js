import React from 'react';
import Navbar from './Navbar';
import Productscontainer from './Productscontainer';

const Home = () => {
    return (
        <div className="Main-container">
            <Navbar/>
            <Productscontainer/>
        </div>
    )
}

export default Home;