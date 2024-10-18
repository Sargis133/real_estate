import "../assets/styles/contact.css"
import WelcomeBlock from "../components/WelcomeBlock/WelcomeBlock";
import {Link} from "react-router-dom";

function Contact() {
    return(
        <div className="contact-page">
            <WelcomeBlock pageName="Contact us"/>

            <div className="contact-page__content container">
                <div className="contact-page__text-content">
                    <p className="title-h3">Contact us</p>
                    <p className="contact-page__subtitle">
                        We're open for any suggestion or just to have a chat
                    </p>
                    <div className="contact-page__info-cols">
                        <div className="contact-page__info-col">
                            <p>address</p>
                            <p> 198 West 21th Street, Suite 721 New York NY 10016</p>
                        </div>
                        <div className="contact-page__info-col">
                            <p>email</p>
                            <p>info@mail.ru</p>
                        </div>
                        <div className="contact-page__info-col">
                            <p>phone</p>
                            <p>+1 234 567 890</p>
                        </div>
                    </div>
                    <div className="contact-page__form">
                        <input type="text" placeholder="Name"/>
                        <input type="text" placeholder="Email"/>
                        <input type="text" placeholder="Subject"/>
                        <textarea placeholder="Create a message here"></textarea>
                        <button className="contact-page__form-btn green-btn">
                            send message
                        </button>
                    </div>
                    <div className="contact-page__follow">
                        <p className="contact-page__follow-title title-h3">Follow us here</p>
                        <div className="contact-page__society-links">
                            <Link to="/">
                                Facebook
                            </Link>
                            <Link to="/">
                                twitter
                            </Link>
                            <Link to="/">
                                instagram
                            </Link>
                            <Link to="/">
                                dribble
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="contact-page__map-section">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42005.66972807615!2d-122.41230206736935!3d37.965217108734535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085672a61744e71%3A0x71058b7e9a0af79!2z0KHQsNC9INCf0LDQsdC70L4sINCa0LDQu9C40YTQvtGA0L3QuNGPLCDQodCo0JA!5e1!3m2!1sru!2sam!4v1729019700430!5m2!1sru!2sam"
                        width="100%" height="100%" style={{border: 0}} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact