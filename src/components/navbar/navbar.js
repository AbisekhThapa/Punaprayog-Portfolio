
import React, { useState } from 'react'
import './navbar.scss'
import { GiHamburgerMenu } from 'react-icons/gi'

function Navbar() {
    const [showMediaIcons, setshowMediaIcons] = useState(false);
    return (
        <nav className="navbar">
            <div className='logo'>
                <h1>Punaprayog</h1>
            </div>

            <div className={showMediaIcons ? " mobile-link" : "links"}>
                <ul>
                    <li>
                        <a href='/#home'>Home</a>
                    </li>
                    <li>
                        <a href='/#products'>Products</a>
                    </li>
                    <li>
                        <a href='/#ourServices'>Services</a>
                    </li>
                    <li>
                        <a href='/'>AboutUs</a>
                    </li>
                </ul>

            </div>

            <div className="hamburger-menu">
                <a href='#' onClick={() => setshowMediaIcons(!showMediaIcons)}>
                    <GiHamburgerMenu />
                </a>
            </div>
        </nav>
    )
}

export default Navbar