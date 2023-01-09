import React from 'react'
import './ourServices.scss'

function ourServices() {
    return (
        <div className='ourServices' id='ourServices'>
            <h1>Our Services</h1>
            <div className="container">
                <div className="box skycolor">
                    <p>We Buy</p>
                </div>
                <div className="box greencolor">
                    <p>We Sell</p>
                </div>
                <div className="box marooncolor">
                    <p>We repair</p>
                </div>
            </div>
        </div>
    )
}

export default ourServices