import React from 'react'
import data from './utilis/data'
import Products from './components/products/products.js';
import OurServices from './components/ourServices/ourServices.js';

function landingPage() {
    return (
        <>
            <Products data={data} />
            <OurServices />
        </>
    )
}

export default landingPage