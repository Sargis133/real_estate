import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import WelcomeBlock from "../components/WelcomeBlock/WelcomeBlock";
import "../assets/styles/blog.css"
import Icons from "../components/Icons/Icons";

function Blog() {
    const { id} = useParams()
    const [blog, setBlog] = useState([])
    const [recentBlog, setRecentBlog] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/data/blogs.json").then(res => res.json())
            .then(data => {
                const findBlog = data.blogs?.find(item => +item.id === +id)
                setBlog(findBlog)
            })
    }, []);

    useEffect(() => {
        fetch("http://localhost:3000/data/blogs.json").then(res => res.json())
            .then(data => setRecentBlog(data.blogs?.slice(0, 3)))
    }, []);


    return(
        <div className="blog-page">
            <WelcomeBlock pageName="Blog Details"/>

            <div className="blog-page__page-content container">
                <div className="blog-page__blog-details">
                    {blog.blogContent?.map((content, index) => {
                        return(
                            <div key={index}>
                                {content.type === "title" &&
                                    <p className="blog-page__blog-title">{content.value}</p>
                                }
                                {content.type === "image" &&
                                    <img className="blog-page__blog-image" src={`/images/${content.value}`} alt="blog-img"/>
                                }
                                {content.type === "text" &&
                                    <p className="blog-page__blog-text">{content.value}</p>
                                }
                            </div>
                        )
                    })}

                    <div className="blog-page__tags">
                        {blog.tags?.map((tag, index) => {
                            return(
                                <p key={index}>
                                    {tag}
                                </p>
                            )
                        })}
                    </div>

                    <div className="blog-page__creator">
                        <img className="blog-page__creator-image" src={`/images/${blog.creator?.image}`} alt="creator-image"/>
                        <div className="blog-page__creator-info">
                            <p className="title-h3">
                                {blog.creator?.name}
                            </p>
                            <p className="blog-page__creator-text">
                                {blog.creator?.quote}
                            </p>
                        </div>
                    </div>

                    <div className="blog-page__comments-block">
                        <p className="title-h3">
                            {blog.comments?.length} Comments
                        </p>
                        <div className="blog-page__comments">
                            {blog.comments?.map(comment => {
                                return(
                                    <div className="blog-page__comment" key={comment.id}>
                                        <img className="blog-page__commentator-img" src={`/images/${comment.userImage}`} alt="user-image"/>
                                        <div className="blog-page__comment-info">
                                            <p className="blog-page__commentator-name title-h3">
                                                {comment.user}
                                            </p>
                                            <p className="blog-page__comment-date">
                                                {comment.date}
                                            </p>
                                            <p className="blog-page__comment-text">
                                                {comment.comment}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="blog-page__comment-form">
                        <p className="blog-page__form-title title-h3">Leave a comment</p>

                        <div className="blog-page__form">
                            <div className="blog-page__form-input-box">
                                <label htmlFor="comment-name-input">Name*</label>
                                <input type="text" id="comment-name-input" className="form-input"/>
                            </div>
                            <div className="blog-page__form-input-box">
                                <label htmlFor="comment-email-input">Email*</label>
                                <input type="text" id="comment-email-input" className="form-input"/>
                            </div>
                            <div className="blog-page__form-input-box">
                                <label htmlFor="comment-email-input">Message*</label>
                                <textarea id="comment-email-input" className="form-input"></textarea>
                            </div>
                            <button className="blog-page__form-submit green-btn">
                                post comment
                            </button>
                        </div>
                    </div>
                </div>

                <div className="blog-page__options">
                    <div className="blog-page__search-box">
                        <input type="text" placeholder="Search..." className="form-input"/>
                        <Icons name="search" stroke="#999999"/>
                    </div>

                    <div className="blog-page__property-types">
                        <p className="blog-page__property-title title-h3">
                            Property Type
                        </p>
                        <Link to="/" className="blog-page__property-link">Land</Link>
                        <Link to="/" className="blog-page__property-link">Residential</Link>
                        <Link to="/" className="blog-page__property-link">commercial</Link>
                        <Link to="/" className="blog-page__property-link">industrial</Link>
                    </div>

                    <div className="blog-page__recent-blogs">
                        <p className="blog-page__recent-title title-h3">
                            Recent Blog
                        </p>
                        {recentBlog.map(item => {
                            return (
                                <Link to={`/blog/${item.id}`} className="blog-page__recent-blog" key={item.id}>
                                    <img className="blog-page__recent-blog-image" src={`/images/${item.cardImage}`} alt="recent-blog-img"/>
                                    <div className="blog-page__recent-blog-info">
                                        <p className="blog-page__recent-blog-title">{item.cardTitle}</p>
                                        <p className="blog-page__recent-blog-chars">
                                            <span>
                                                <Icons name="calendar" stroke="#5ea51d" width="0.8rem" height="0.8rem"/>
                                                 {item.date}
                                            </span>
                                            <span>
                                                <Icons name="user" fill="#5ea51d" width="0.8rem" height="0.8rem"/>
                                                 {item.creator?.name}
                                            </span>
                                            <span>
                                                <Icons name="comment" fill="#5ea51d" width="0.8rem" height="0.8rem"/>
                                                {item.comments?.length}
                                            </span>
                                        </p>
                                    </div>
                                </Link>
                            )
                        })}

                    </div>

                    <div className="blog-page__tag-cloud">
                        <p className="blog-page__tag-cloud-title title-h3">
                            Tag Cloud
                        </p>
                        <div className="blog-page__tag-cloud-tags">
                            <p className="blog-page__tag">
                                real
                            </p>
                            <p className="blog-page__tag">
                                estate
                            </p>
                            <p className="blog-page__tag">
                                house
                            </p>
                            <p className="blog-page__tag">
                                home
                            </p>
                            <p className="blog-page__tag">
                                agent
                            </p>
                            <p className="blog-page__tag">
                                office
                            </p>
                            <p className="blog-page__tag">
                                rent
                            </p>
                            <p className="blog-page__tag">
                                sale
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog