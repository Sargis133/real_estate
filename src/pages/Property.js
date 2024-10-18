import {Link, NavLink, useParams} from "react-router-dom";
import WelcomeBlock from "../components/WelcomeBlock/WelcomeBlock";
import {useEffect, useState} from "react";
import {Carousel} from "react-responsive-carousel";
import "../assets/styles/property.css"
import Icons from "../components/Icons/Icons";
import YandexMap from "../components/YandexMap/YandexMap";
import PropertiesCard from "../components/PropertiesCard/PropertiesCard";
import {fetchProperties} from "../utils/fetchProperties";
import {fetchProperty} from "../utils/fetchProperty";

function Property() {
    const {id} = useParams()
    const [property, setProperty] = useState(null)
    const [similar, setSimilar] = useState([])

    useEffect(() => {
        fetchProperty(`https://real-estate12.p.rapidapi.com/v1/real-estate/property?property_id=${id}`).then(res => JSON.parse(res))
            .then(data => {
                setProperty(data.body)
                console.log(data)
            })
    }, []);

    useEffect(() => {
        fetchProperties(`https://real-estate12.p.rapidapi.com/v1/real-estate/${property.status === "for_rent" ? 'rent' : 'sale'}?state=NY&city=new%20york&page=1&sort=${property.status === 'for_rent' ? 'newest' : 'relevant'}`)
            .then(data => {
                if (data) {
                    const homes = JSON.parse(data)?.body
                    setSimilar(homes.slice(0, 3))
                }
            })
    }, [property]);


    return (
        <div className="property-page">
            <WelcomeBlock pageName="Property"/>

            {property?.body ? (

                <div className="property-page__loader">
                    <div className="loader"></div>
                </div>

            ) : (

                <div className="property-page__content container">

                    <div className="property-page__property-aside">
                        <Carousel autoPlay={true} interval={2000} showIndicators={false} stopOnHover={true}
                                  swipeable={true}
                                  infiniteLoop={true} showStatus={false} showArrows={false}
                                  className="property-page__carousel">
                            {property.photos?.map((image, index) => {
                                return (
                                    <img src={image} alt="home-img" key={index}
                                         className="property-page__carousel-img"/>
                                )
                            })}
                        </Carousel>
                        <p className="title-h3 property-page__property-title">
                        <span>
                            {property.location?.address?.line} - {property.location?.address?.city}({property.location?.address.state_code})
                        </span>
                            <span>
                            Price - {property.list_price}$
                        </span>
                        </p>
                        <p className="property-page__description-text">
                            {property.description?.text || ''}
                        </p>
                        <div className="property-page__tags">
                            <div className="property-page__tag">
                                <Icons name="home" fill="#fff" width="1.2rem" height="1.2rem"/>
                                <span>Type - {property.description?.type || ''}</span>
                            </div>
                            {property.description?.year_built &&
                                <div className="property-page__tag">
                                    <Icons name="construction" fill="#fff" width="1.2rem" height="1.2rem"/>
                                    <span>Built - {property.description?.year_built}</span>
                                </div>
                            }
                            <div className="property-page__tag">
                                <Icons name="square" fill="#fff" width="1.2rem" height="1.2rem"/>
                                <span>{property.description?.sqft} sqFt</span>
                            </div>
                            <div className="property-page__tag">
                                <Icons name="bath" fill="#fff" width="1.2rem" height="1.2rem"/>
                                <span>{property.description?.baths} Bathroom</span>
                            </div>
                            <div className="property-page__tag">
                                <Icons name="bed" fill="#fff" width="1.2rem" height="1.2rem"/>
                                <span>{property.description?.beds} Bedroom</span>
                            </div>
                        </div>
                        <p className="title-h3">Utility Facilities</p>
                        <div className="property-page__utility-items">
                            {
                                property.details?.map(item => {
                                    return (
                                        <p className="property-page__utility-item">
                                            <Icons name="done"/>
                                            <span>{item.category}</span>
                                        </p>
                                    )
                                })
                            }
                        </div>
                        <p className="title-h3">Contacts</p>
                        <div className="property-page__contact-items">
                            <Link to="tel:+123456789" className="property-page__contact-link">
                                <Icons name="phone" fill="#5ea51d" width="1.2rem" height="1.2rem"/>
                                <span>
                                +1 234 567 890
                            </span>
                            </Link>
                            <Link to="mailto:info@mail.ru" className="property-page__contact-link">
                                <Icons name="comment" fill="#5ea51d" width="1rem" height="1rem"/>
                                <span>Send Message</span>
                            </Link>
                        </div>
                        <p className="title-h3">See on Map</p>
                        <div className="property-page__map">
                            <YandexMap
                                lat={property.location?.address?.coordinate.lat}
                                long={property.location?.address?.coordinate.lon}
                            />
                        </div>
                    </div>

                    <div className="property-page__options-aside">
                        <p className="title-h3">Find Property</p>
                        <ul className="property-page__find-option-list">
                            <li>
                                <Link to="/properties">House</Link>
                            </li>
                            <li>
                                <Link to="/properties">Apartment</Link>
                            </li>
                            <li>
                                <Link to="/properties">Land</Link>
                            </li>
                            <li>
                                <Link to="/properties">Industrial</Link>
                            </li>
                            <li>
                                <Link to="/properties">Commercial</Link>
                            </li>
                        </ul>
                        <p className="title-h3">
                            Similar Properties
                        </p>
                        <div className="property-page__similar-properties">
                            {
                                similar.map((item, index) => {
                                    return (
                                        <Link to={`/property/${item.property_id}`} key={index}
                                              className="property-card-link">
                                            <PropertiesCard property={item}/>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Property