import "./header.css"
import Icons from "../Icons/Icons";
import {Link} from "react-router-dom";


function Header() {
    return (
        <header className="header">
            <div className="header__info-cols container">

                <div className="header__info-col">
                    <div className="header__info-col__icon">
                        <Icons name="map" width="1.5rem" height="1.5rem"/>
                    </div>
                    <div className="header__info-col__text">
                        <p>
                            <span className="green-text">Free Call </span>
                            +1 234 456 7890
                        </p>
                        <p>
                            Call Us Now 24/7 Customer Support
                        </p>
                    </div>
                </div>
                <div className="header__info-col">
                    <div className="header__info-col__icon">
                        <Icons name="telegram" width="1.5rem" height="1.5rem" fill="#fff"/>
                    </div>
                    <div className="header__info-col__text">
                        <p>
                            Our Location
                        </p>
                        <p>
                            Suite 721 New York NY 10016
                        </p>
                    </div>
                </div>
                <div className="header__info-col">
                    <div className="header__info-col__icon">
                        <Icons name="connect" width="1.5rem" height="1.5rem" fill="#fff"/>
                    </div>
                    <div className="header__info-col__text">
                        <p>
                            <span className="green-text">Connect </span>
                            with us
                        </p>
                        <p className="header__info-col__links">
                            <a href="https://www.facebook.com/?locale=en">FACEBOOK</a>
                            <a href="https://x.com/?lang=en">TWITTER</a>
                            <a href="https://dribbble.com/">DRIBBLE</a>
                        </p>
                    </div>
                </div>

            </div>

            <nav className="header__navbar">
                <div className="container header__navbar-items">

                    <Link to="/" className="navbar__brand-link">
                        <span>Oakberry</span>
                        <span>real estate agency</span>
                    </Link>
                    <ul className="navbar__list-items">
                        <li className="navbar__list-item">
                            <Link to="/">home</Link>
                        </li>
                        <li className="navbar__list-item">
                            <Link to="/about">about</Link>
                        </li>
                        <li className="navbar__list-item">
                            <Link to="/properties">properties</Link>
                        </li>
                        <li className="navbar__list-item">
                            <Link to="/agents">agents</Link>
                        </li>
                        <li className="navbar__list-item">
                            <Link to="/blogs">blog</Link>
                        </li>
                        <li className="navbar__list-item">
                            <Link to="/contact">contact</Link>
                        </li>
                    </ul>
                    <button className="navbar__submit-btn default-btn green-btn rounded-btn">
                        Submit a property
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header