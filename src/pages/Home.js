import WelcomeSlider from "../components/WelcomeSlider/WelcomeSlider";
import "../assets/styles/home.css"
import FilterOptions from "../components/FilterOptions/FilterOptions";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import ExploreProperties from "../components/ExploreProperties/ExploreProperties";
import FeaturedProperties from "../components/FeaturedProperties/FeaturedProperties";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import modernHouseVideo from "../assets/videos/videoplayback.mp4"
import AboutInfo from "../components/AboutInfo/AboutInfo";
import FindPlaceBanner from "../components/FindPlaceBanner/FindPlaceBanner";
import {allImages} from "../assets/images/image";
import AgentCard from "../components/AgentCard/AgentCard";
import BlogCard from "../components/BlogCard/BlogCard";
import ClientsSlider from "../components/ClientsSlider/ClientsSlider";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";


function Home() {
    const [agents, setAgents] = useState([])
    const [blogs, setBlogs] = useState([])
    const gallery = [
        {
            id: 0,
            image: allImages.gallery_1
        },
        {
            id: 1,
            image: allImages.gallery_2
        },
        {
            id: 2,
            image: allImages.gallery_3
        },
        {
            id: 3,
            image: allImages.gallery_4
        },
        {
            id: 4,
            image: allImages.gallery_5
        },
        {
            id: 5,
            image: allImages.gallery_6
        }
    ]

    useEffect(() => {
        fetch("http://localhost:3000/data/blogs.json").then(res => res.json())
            .then(data => setBlogs(data.blogs?.slice(0, 4)))
        fetch("http://localhost:3000/data/agents.json").then(res => res.json())
            .then(data => setAgents(data.agents?.slice(0, 4)))
    }, []);


    return(
        <div className="home-page">
            <div className="home-page__welcome-slider">
                <WelcomeSlider/>
            </div>

            <div className="home-page__filter-section">
                <FilterOptions />
            </div>

            <div className="home-page__explore-categories container" data-aos="fade-up">
                <SectionTitle title="Explore Our Categories & Places" subtitle="Oakberry Categories"/>
                <ExploreProperties />
            </div>

            <div className="home-page__featured-properties" data-aos="fade-up">
                <SectionTitle title="Featured Properties" subtitle="Our Properties"/>
                <FeaturedProperties />
            </div>

            <div className="home-page__video-section" data-aos="fade-up">
                <div className="home-page__video">
                    <VideoPlayer src={modernHouseVideo}/>
                </div>
            </div>

            <div className="home-page__about-info container">
                <AboutInfo/>
            </div>

            <div className="home-page__find-banner" data-aos="fade-in" data-aos-delay="200">
                <FindPlaceBanner />
            </div>

            <div className="home-page__clients-section" data-aos="fade-up" data-aos-delay="400">
                <SectionTitle title="Clients We Help" subtitle="Testimonial"/>
                <ClientsSlider />
            </div>

            <div className="home-page__agents-section">
                <div className="home-page__agents-cards container" >
                    <div data-aos="fade-up">
                        <SectionTitle title="Our Agents" subtitle="Meets our agents" />
                    </div>
                    <div className="home-page__agents">
                        {
                            agents.map((agent, index) => {
                                return (
                                    <div key={agent.id} data-aos="fade-up" data-aos-delay={index * 100}>
                                        <AgentCard agent={agent}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <div className="home-page__blog-section">
                <div data-aos="fade-up">
                    <SectionTitle title="Recent Blog" subtitle="our blog"/>
                </div>
                <div className="home-page__blog-cols container">
                    {blogs.map((item, index) => {
                        return(
                            <Link  to={`/blog/${item.id}`} key={item.id} data-aos="fade-up" data-aos-delay={index * 100}>
                                <BlogCard blog={item}/>
                            </Link>
                        )
                    })}
                </div>
            </div>

            <div className="home-page__gallery-section" data-aos="fade-up">
                {gallery.map(image => {
                    return(
                        <img src={image.image} alt="gallery-image" key={image.id} className="home-page__gallery-image"/>
                    )
                })}
            </div>

        </div>
    )
}

export default Home