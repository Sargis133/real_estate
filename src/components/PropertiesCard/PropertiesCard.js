import "./propertiesCard.css"
import {allImages} from "../../assets/images/image";
import {getPreviousTime} from "../../utils/getPreviousTime";
import Icons from "../Icons/Icons";
import {formatNumberWithCommas} from "../../utils/formatNumberWithCommas";

function PropertiesCard({property}) {

    function navigateToLocation(e, link) {
        e.stopPropagation()
        e.preventDefault()
        window.open(link, "_blank")
    }

    return (
        <div className="properties-card">
            <div className="properties-card__image-box">
                <img src={property.primary_photo?.href || property.photos[0]?.href} alt="properties-image" className="properties-card__image"/>
                <p className="properties-card__price green-price">
                    ${formatNumberWithCommas(+property.list_price)}
                </p>
            </div>

            <div className="properties-card__information">
                <div className="properties-card__agent">
                    <img src={allImages.agent_1} alt="agent-image"/>
                    <span>{property.source?.agents?.[0]?.office_name || 'John Doe'}</span>
                </div>
                <p className="properties-card__data">
                    {getPreviousTime(property.list_date)}
                </p>
            </div>

            <p className="properties-card__title">
                {property.location?.address?.city} {property.location?.address?.line}
            </p>

            <div className="properties-card__location">
                <span
                    onClick={(e) => navigateToLocation(e,`https://maps.google.com/?q=${property.location?.coordinate.lat + ',' + property.location?.coordinate.lon}`)}
                    className="properties-card__location-link">
                    <Icons name="location" width="0.7rem" height="0.7rem" fill="#5ea51d"/>
                    {property.location.address?.city}
                </span>
                {property.status === "for_sale" &&
                    <span className="green-price">Sale</span>
                }
                {property.status === "for_rent" &&
                    <span className="red-price">Rent</span>
                }
            </div>

            <div className="properties-card__keys">
                <div className="properties-card__key">
                    <Icons name="bed" stroke="#2B2B2B"/>
                    <span>{property.description.beds}</span>
                </div>
                <div className="properties-card__key">
                    <Icons name="bath" fill="#2B2B2B"/>
                    <span>{property.description.baths_consolidated}</span>
                </div>
                <div className="properties-card__key">
                    <Icons name="square" fill="#2B2B2B"/>
                    <span>{formatNumberWithCommas(+property.description.sqft)} sqft</span>
                </div>
            </div>
        </div>
    )
}

export default PropertiesCard