import "./blogCard.css"

function BlogCard({blog}) {
    return(
        <div className="blog-card">
            <img src={`/images/${blog.cardImage}`} alt="blog-image" className="blog-card__image"/>
            <div className="blog-card__text-content">
                <p className="blog-card__info">
                    <span>{blog.creator.name.split(' ')[0]}</span>
                    <span>{blog.date}</span>
                    <span>{blog.comments.length} Comments</span>
                </p>
                <p className="blog-card__title">
                    {blog.cardTitle}
                </p>
                <p className="blog-card__text">
                    {blog.cardText}
                </p>
            </div>
        </div>
    )
}
export default BlogCard