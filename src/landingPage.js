import React from 'react'
import data from './utilis/data'
import Products from './components/products/products.js';
import OurServices from './components/ourServices/ourServices.js';
import Home from './components/home/home';

function landingPage() {
    return (
        <>
            <Home />
            <Products data={data} />
            <OurServices />
        </>
    )
}

export default landingPage