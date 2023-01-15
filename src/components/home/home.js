import './home.scss'
import { FaFacebook, FaYoutube, FaFacebookMessenger } from "react-icons/fa";

function Home() {
    return (
        <div className="home">
            <p>BUY ANYTHING</p>
            <p>AND</p>
            <p>SELL EVERYTHING</p>

            <div className="socialmedia">
                <ul>
                    <li>
                        <a href='https://www.facebook.com/netrc.netrc.9' target="maharjan">
                            <FaFacebook />
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <FaYoutube />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.facebook.com/messages/t/100039307923674' target="_blank">
                            <FaFacebookMessenger />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Home