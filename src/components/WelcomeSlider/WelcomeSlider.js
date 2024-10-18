import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {allImages} from "../../assets/images/image";
import "./welcomeSlider.css"
import {Link} from "react-router-dom";
import Icons from "../Icons/Icons";

function WelcomeSlider() {
    return (
        <Carousel axis="horizontal" infiniteLoop={true} interval={3000} autoPlay={true} showStatus={false}
                  showThumbs={false} swipeable={true} stopOnHover={false} showArrows={false} className="welcome-slider">
            <div className="slider-item">
                <img  className="slider-item__image" src={allImages.welcome_slider_image_1} alt="slider-img"/>
                <div className="slider-item__text-content">
                    <p className="slider-item__title">Your Property Is<br/> Our Priority</p>
                    <p className="slider-item__text">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <Link to="/" className="default-btn green-btn slider-item__btn">
                        <span>Learn more</span>
                        <Icons name="arrow-right"/>
                    </Link>
                </div>
            </div>
            <div className="slider-item">
                <img className="slider-item__image" src={allImages.welcome_slider_image_2} alt="slider-img"/>
                <div className="slider-item__text-content">
                    <p className="slider-item__title">Let Your Home Be<br/> Unique & Stylist</p>
                    <p className="slider-item__text">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <Link to="/" className="default-btn green-btn slider-item__btn">
                        <span>Learn more</span>
                        <Icons name="arrow-right" />
                    </Link>
                </div>
            </div>
            <div className="slider-item">
                <img className="slider-item__image" src={allImages.welcome_slider_image_3} alt="slider-img"/>
                <div className="slider-item__text-content">
                    <p className="slider-item__title">Modern House<br/> Make Better Life</p>
                    <p className="slider-item__text">A small river named Duden flows by their place and supplies it with
                        the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly
                        into your mouth.</p>
                    <Link to="/" className="default-btn green-btn slider-item__btn">
                        <span>Learn more</span>
                        <Icons name="arrow-right" />
                    </Link>
                </div>
            </div>
        </Carousel>
    )
}

export default WelcomeSlider