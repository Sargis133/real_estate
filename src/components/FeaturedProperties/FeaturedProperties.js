import {useEffect, useState} from "react";
import {fetchProperties} from "../../utils/fetchProperties";
import PropertiesCard from "../PropertiesCard/PropertiesCard";
import "./featuredProperties.css"
import EmptyCard from "../EmptyCard/EmptyCard";
import {Link} from "react-router-dom";

function FeaturedProperties() {
    const [featuredProperties, setFeaturedProperties] = useState(null)

    useEffect(() => {
        fetchProperties('https://real-estate12.p.rapidapi.com/v1/real-estate/sale?state=NY&city=new%20york&page=1&sort=relevant')
            .then(data => {
                if (data) {
                    const homes = JSON.parse(data)?.body?.slice(0, 4)
                    setFeaturedProperties(homes)
                }
            })

    }, []);

    return (
        <div className="featured-properties container">
            {
                featuredProperties?.length > 0 ? (
                    featuredProperties.map((item, index) => {
                        return (
                            <div key={+item.property_d} className="featured-properties__card" data-aos="zoom-in-right"
                                 data-aos-duration={index * 100}>
                                <Link to={`/property/${+item.property_id}`} className="property-card-link" >
                                    <PropertiesCard property={item}/>
                                </Link>
                            </div>
                        )
                    })
                ) : (
                    [0, 1, 2, 3].map((item, index) => {
                        return (
                            <div className="featured-properties__empty-card" key={item} data-aos="zoom-in-right"
                                 data-aos-duration={index * 100}>
                                <EmptyCard/>
                            </div>
                        )
                    })
                )
            }
        </div>
    )
}

export default FeaturedProperties