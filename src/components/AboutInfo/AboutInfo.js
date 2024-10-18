import SectionTitle from "../SectionTitle/SectionTitle";
import {allImages} from "../../assets/images/image";
import "./aboutInfo.css"
import AnimatedNumber from "animated-number-react";
import {useEffect, useRef, useState} from "react";

function AboutInfo() {
    const [years, setYears] = useState(0)
    const [total, setTotal] = useState(0)
    const [realtors, setRealtors] = useState(0)
    const [branches, setBranches] = useState(0)

    const aboutBlock = useRef(null)

    useEffect(() => {
        window.addEventListener("scroll", function(e) {
            if((aboutBlock.current?.getBoundingClientRect().top - window.innerHeight / 3) < 0) {
                setYears(50)
                setTotal(210)
                setRealtors(450)
                setBranches(100)
            } else {
                setYears(0)
                setTotal(0)
                setRealtors(0)
                setBranches(0)
            }
        })
    }, []);


    function formatValue(value) {
        return value.toFixed(0)
    }

    return(
        <div ref={aboutBlock} className="about-info" data-aos="fade-left" data-aos-delay="100">
            <img src={allImages.about_banner} alt="banner-img" className="about-info__banner-img"/>
            <div className="about-info__text-content">
                <SectionTitle title="Oakberry A Real Estate Company" subtitle="about us"/>

                <p className="about-info__description">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <div className="about-info__numbers">
                    <div className="about-info__number" data-aos="fade-up" data-aos-delay="100" data-aos-duration="50">
                        <p>
                            <AnimatedNumber value={years} formatValue={formatValue}/>
                        </p>
                        <p>Years of Experienced</p>
                    </div>
                    <div className="about-info__number" data-aos="fade-up" data-aos-delay="100" data-aos-duration="100">
                        <p>
                            <AnimatedNumber value={total} formatValue={formatValue}/>
                            <span>k+</span>
                        </p>
                        <p>Total Properties</p>
                    </div>
                    <div className="about-info__number" data-aos="fade-up" data-aos-delay="100" data-aos-duration="150">
                        <p>
                            <AnimatedNumber value={realtors} formatValue={formatValue}/>
                        </p>
                        <p>Qualified Realtors</p>
                    </div>
                    <div className="about-info__number" data-aos="fade-up" data-aos-delay="100" data-aos-duration="200">
                        <p>
                            <AnimatedNumber value={branches} formatValue={formatValue}/>
                        </p>
                        <p>Total Branches</p>
                    </div>
                </div>
                <div className="about-info__footer">
                    <img src={allImages.about_banner_2} alt="banner-2-img" className="about-info__footer-image"/>
                </div>
            </div>
        </div>
    )
}

export default AboutInfo