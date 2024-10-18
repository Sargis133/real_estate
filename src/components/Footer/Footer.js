import "./footer.css"
import {Link} from "react-router-dom";
import Icons from "../Icons/Icons";

function Footer() {
    return(
        <footer className="footer">
            <div className="footer__cols container">
                <div className="footer__logo-aside">
                    <Link to="/" className="footer__logo-link">
                        <span>Oakberry</span>
                        <span>real estate agency</span>
                    </Link>
                    <div className="footer__description">
                        A small river named Duden flows by their place and supplies it with the necessary regelialia.
                    </div>
                    <div className="footer__society-links">
                        <Link to="https://x.com/?lang=en" target="_blank" className="society-green-link">
                            <Icons name="twitter" fill="#fff"/>
                        </Link>
                        <Link to="https://www.facebook.com/?locale=en" target="_blank" className="society-green-link">
                            <Icons name="facebook" fill="#fff"/>
                        </Link>
                        <Link to="https://www.instagram.com/" target="_blank" className="society-green-link">
                            <Icons name="instagram" fill="#fff"/>
                        </Link>
                    </div>
                </div>

                <div className="footer__navbar">
                    <div className="footer__navbar-item">
                        <p className="footer__navbar-title">
                            Offers
                        </p>
                        <ul className="footer__navbar-list">
                            <li>
                                <Link to="/properties" className="footer__navbar-link">
                                    <Icons name="arrow-right-short" fill="rgba(250, 250, 250, 0.7)" width="0.8rem"
                                           height="0.8rem"/>
                                    <span>Properties</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/agents" className="footer__navbar-link">
                                    <Icons name="arrow-right-short" fill="rgba(250, 250, 250, 0.7)" width="0.8rem"
                                           height="0.8rem"/>
                                    <span>Agents</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="footer__navbar-link">
                                    <Icons name="arrow-right-short" fill="rgba(250, 250, 250, 0.7)" width="0.8rem"
                                           height="0.8rem"/>
                                    <span>Locations</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="footer__navbar-link">
                                    <Icons name="arrow-right-short" fill="rgba(250, 250, 250, 0.7)" width="0.8rem"
                                           height="0.8rem"/>
                                    <span>Clients Support</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__navbar-item">
                        <p className="footer__navbar-title">
                            Company
                        </p>
                        <ul className="footer__navbar-list">
                            <li>
                                <Link to="/" className="footer__navbar-link">
                                    <Icons name="arrow-right-short" fill="rgba(250, 250, 250, 0.7)" width="0.8rem"
                                           height="0.8rem"/>
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="footer__navbar-link">
                                    <Icons name="arrow-right-short" fill="rgba(250, 250, 250, 0.7)" width="0.8rem"
                                           height="0.8rem"/>
                                    <span>About</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/blogs" className="footer__navbar-link">
                                    <Icons name="arrow-right-short" fill="rgba(250, 250, 250, 0.7)" width="0.8rem"
                                           height="0.8rem"/>
                                    <span>Blog</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="footer__navbar-link">
                                    <Icons name="arrow-right-short" fill="rgba(250, 250, 250, 0.7)" width="0.8rem"
                                           height="0.8rem"/>
                                    <span>Contact Us</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__navbar-item">
                        <p className="footer__navbar-title">
                            Quick Links
                        </p>
                        <ul className="footer__navbar-list">
                            <li>
                                <Link to="/" className="footer__navbar-link">
                                    <Icons name="arrow-right-short" fill="rgba(250, 250, 250, 0.7)" width="0.8rem"
                                           height="0.8rem"/>
                                    <span>Terms & Conditions</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="footer__navbar-link">
                                    <Icons name="arrow-right-short" fill="rgba(250, 250, 250, 0.7)" width="0.8rem"
                                           height="0.8rem"/>
                                    <span>User's Guide</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="footer__navbar-link">
                                    <Icons name="arrow-right-short" fill="rgba(250, 250, 250, 0.7)" width="0.8rem"
                                           height="0.8rem"/>
                                    <span>Support Center</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="footer__navbar-link">
                                    <Icons name="arrow-right-short" fill="rgba(250, 250, 250, 0.7)" width="0.8rem"
                                           height="0.8rem"/>
                                    <span>Press Info</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__navbar-item">
                        <p className="footer__navbar-title">
                            Have a Questions?
                        </p>
                        <ul className="footer__navbar-list footer__society-list">
                            <li>
                                <Link to="https://maps.app.goo.gl/YBgELfY6ZDcdYtTW6" target="_blank" className="footer__navbar-link footer__society-link">
                                    <Icons name="map" fill="#5ea51d" width="1.2rem" height="1.2rem"/>
                                    <span>203 Fake St.Mountain View, San Francisco, California, USA</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="tel:+123456789" target="_blank" className="footer__navbar-link footer__society-link">
                                    <Icons name="phone" fill="#5ea51d" width="1.2rem" height="1.2rem"/>
                                    <span>+1 234 567 890</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="mailto:info@estate.com" target="_blank" className="footer__navbar-link footer__society-link">
                                    <Icons name="telegram" fill="#5ea51d" width="1.2rem" height="1.2rem"/>
                                    <span>info@estate.com</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer