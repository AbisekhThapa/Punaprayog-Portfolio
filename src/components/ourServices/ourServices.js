import React from 'react'
import './ourServices.scss'
import { GrStakeholder } from 'react-icons/gr';
import { RiTakeawayLine } from 'react-icons/ri';
import { GrServices } from 'react-icons/gr';

function ourServices() {
    return (
        <div className='ourServices' id='ourServices'>
            <h1>Our Services</h1>
            <div className="container">
                <div className="box skycolor">
                    <GrStakeholder size={50} color='white' />
                    <div class="content">
                        <h2>We Buy</h2>
                        <p>We buy any types of your
                            products.If you want to migrate to your new houses we are here for you
                            to buy products that are no use to you but can be usefull to others</p>
                        <h3> contact:</h3>
                    </div>
                </div>
                <div className="box greencolor">
                    <RiTakeawayLine size={50} color='black' />
                    <div class="content">
                        <h2>We Sell</h2>
                        <p>We sell all kinds of products for your house, hotels and offices.If you
                            want products in high quantity in reasonable price then this is best place for you</p>
                        <h3> contact:</h3>
                    </div>
                </div>
                <div className="box marooncolor">
                    <GrServices size={50} />
                    <div class="content">
                        <h2>Service</h2>
                        <p>We also provide repairing services of electronics products like television , mobile, laptops etc.</p>
                        <h3> contact:</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ourServices