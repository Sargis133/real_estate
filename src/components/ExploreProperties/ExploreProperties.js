import "./exploreProperties.css"
import {useEffect, useRef, useState} from "react";
import Icons from "../Icons/Icons";
import {Link} from "react-router-dom";
import AOS from "aos";


function ExploreProperties() {
    const [estateType, setEstateType] = useState('land')
    const exploreLocationBlock = useRef(null)
    const estateCounts = {
        land: [
            {
                name: 'New York',
                count: 20
            },
            {
                name: 'California',
                count: 40
            },
            {
                name: 'Florida',
                count: 18
            },
            {
                name: 'London',
                count: 32
            },
            {
                name: 'Tennessee',
                count: 11
            },
            {
                name: 'Charlotte',
                count: 20
            },
            {
                name: 'Chicago',
                count: 12
            },
            {
                name: 'Texas',
                count: 20
            },
            {
                name: 'Orlando',
                count: 17
            },
            {
                name: 'Illinois',
                count: 30
            },
            {
                name: 'North Carolina',
                count: 26
            },
            {
                name: 'Atlanta',
                count: 20
            },
        ],
        residential: [
            {
                name: 'New York',
                count: 18
            },
            {
                name: 'California',
                count: 11
            },
            {
                name: 'Florida',
                count: 24
            },
            {
                name: 'London',
                count: 26
            },
            {
                name: 'Tennessee',
                count: 11
            },
            {
                name: 'Charlotte',
                count: 20
            },
            {
                name: 'Chicago',
                count: 45
            },
            {
                name: 'Texas',
                count: 44
            },
            {
                name: 'Orlando',
                count: 17
            },
            {
                name: 'Illinois',
                count: 31
            },
            {
                name: 'North Carolina',
                count: 28
            },
            {
                name: 'Atlanta',
                count: 22
            },
        ],
        commercial: [
            {
                name: 'New York',
                count: 22
            },
            {
                name: 'California',
                count: 43
            },
            {
                name: 'Florida',
                count: 11
            },
            {
                name: 'London',
                count: 39
            },
            {
                name: 'Tennessee',
                count: 21
            },
            {
                name: 'Charlotte',
                count: 22
            },
            {
                name: 'Chicago',
                count: 31
            },
            {
                name: 'Texas',
                count: 24
            },
            {
                name: 'Orlando',
                count: 19
            },
            {
                name: 'Illinois',
                count: 30
            },
            {
                name: 'North Carolina',
                count: 27
            },
            {
                name: 'Atlanta',
                count: 17
            },
        ],
        industrial: [
            {
                name: 'New York',
                count: 20
            },
            {
                name: 'California',
                count: 40
            },
            {
                name: 'Florida',
                count: 18
            },
            {
                name: 'London',
                count: 32
            },
            {
                name: 'Tennessee',
                count: 11
            },
            {
                name: 'Charlotte',
                count: 20
            },
            {
                name: 'Chicago',
                count: 12
            },
            {
                name: 'Texas',
                count: 20
            },
            {
                name: 'Orlando',
                count: 17
            },
            {
                name: 'Illinois',
                count: 30
            },
            {
                name: 'North Carolina',
                count: 26
            },
            {
                name: 'Atlanta',
                count: 20
            },
        ]
    }


    useEffect(() => {
        AOS.refresh()

    }, [estateType]);

    function changeEstateType(type) {
        exploreLocationBlock.current.classList.add('animation')
        setTimeout(() => exploreLocationBlock.current.classList.remove('animation'), 300)
        setTimeout(() => setEstateType(type), 300)

    }

    return (
        <div className="explore-properties">
            <div className="explore-properties__type-buttons">
                <button onClick={() => changeEstateType('land')} data-aos="fade-up-right"
                        className={`explore-properties__type-btn ${estateType === "land" ? 'active' : ''}`}>
                    <Icons name="architect" width="70px" height="70px"/>
                    <span>Land</span>
                </button>
                <button onClick={() => changeEstateType('residential')} data-aos="fade-up-right" data-aos-delay="50"
                        className={`explore-properties__type-btn ${estateType === "residential" ? 'active' : ''}`}>
                    <Icons name="home" width="70px" height="70px"/>
                    <span>Residential</span>
                </button>
                <button onClick={() => changeEstateType('commercial')} data-aos="fade-up-right" data-aos-delay="150"
                        className={`explore-properties__type-btn ${estateType === "commercial" ? 'active' : ''}`}>
                    <Icons name="apartments" width="70px" height="70px"/>
                    <span>Commercial</span>
                </button>
                <button onClick={() => changeEstateType('industrial')} data-aos="fade-up-right" data-aos-delay="200"
                        className={`explore-properties__type-btn ${estateType === "industrial" ? 'active' : ''}`}>
                    <Icons name="factory" width="70px" height="70px"/>
                    <span>Industrial</span>
                </button>
            </div>

            <div className="explore-properties__locations" ref={exploreLocationBlock}>

                {estateCounts[estateType]?.map(country => {
                    return (
                        <div className="explore-properties__location" key={country.name} data-aos="zoom-in-right">
                            <p className="explore-properties__location-name">{country.name}</p>
                            <Link to={`/properties?type=${estateType}&country=${country.name}`} className="explore-properties__location-btn">
                                {country.count} Properties
                            </Link>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default ExploreProperties