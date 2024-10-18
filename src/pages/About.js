import WelcomeBlock from "../components/WelcomeBlock/WelcomeBlock";
import AboutInfo from "../components/AboutInfo/AboutInfo";
import "../assets/styles/about.css"
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import modernHouse from "../assets/videos/videoplayback.mp4"
import FindPlaceBanner from "../components/FindPlaceBanner/FindPlaceBanner";
import ClientsSlider from "../components/ClientsSlider/ClientsSlider";
import SectionTitle from "../components/SectionTitle/SectionTitle";


function About() {
    return(
        <div className="about-page">
            <WelcomeBlock pageName="about us"/>

            <div className="about-page__info-block container" data-aos="fade-left">
                <AboutInfo />
            </div>

            <div className="about-page__video-block"  data-aos="fade-left">
                <VideoPlayer src={modernHouse}/>
            </div>

            <div className="about-page__find-banner"  data-aos="fade-left">
                <FindPlaceBanner />
            </div>

            <div className="about-page__clients-block"  data-aos="fade-left">
                <SectionTitle title="Clients We Help" subtitle="testimonial"/>
                <ClientsSlider />
            </div>

        </div>
    )
}

export default About