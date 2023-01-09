import React from 'react'
import './footer.scss';

function footer() {
    return (
        <div className='footer'>
            <div className="top">
                <div className="box left">
                    <h1>Purnaprayog</h1>
                    <ul>
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#products'>Products</a></li>
                        <li><a href='#ourServices'>Services</a></li>
                        <li><a href='#aboutUs'>About us</a></li>
                    </ul>
                </div>
                <div className="box center">
                    <p>WE are located at</p>
                    <p>Kathmandu , Pokhara</p>
                    <p> 9123949378</p>
                </div>
                <div className="box right">
                    <p>available at</p>
                    <p><b>facebook , </b></p>
                </div>
            </div>
            <div className="down">
                <h5>© 2022 | All rights reserved</h5>
            </div>
        </div>
    )
}

export default footer