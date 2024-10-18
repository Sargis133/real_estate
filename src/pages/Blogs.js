import "../assets/styles/blogs.css"
import WelcomeBlock from "../components/WelcomeBlock/WelcomeBlock";
import Pagination from "react-js-pagination";
import {useEffect, useState} from "react";
import EmptyCard from "../components/EmptyCard/EmptyCard";
import BlogCard from "../components/BlogCard/BlogCard";
import {Link} from "react-router-dom";

function Blogs() {
    const [blogs, setBlogs] = useState([])
    const [pageItems , setPageItems] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        fetch("http://localhost:3000/data/blogs.json").then(res => res.json())
            .then(data => setBlogs(data.blogs))
    }, []);

    useEffect(() => {
        onSlicePageItems()
    }, [blogs]);

    function onChangePage(page) {
        setCurrentPage(page)
        onSlicePageItems(page)
    }

    function onSlicePageItems(page = currentPage) {
        page = (page - 1) * 8
        const result = blogs.slice(page, page + 8)
        setPageItems(result)
    }

    return(
        <div className="blog-page">
            <WelcomeBlock pageName="Our Blog"/>

            <div className="blog-page__blogs container">
                {pageItems.map((item, index) => {
                    return (
                        <div key={item.id} data-aos="fade-up" data-aos-delay={index * 100}>
                            {Object.keys(item).length > 0 ? (
                                <Link to={`/blog/${item.id}`} className="property-card-link">
                                    <BlogCard blog={item}/>
                                </Link>
                            ) : (
                                <>
                                    <EmptyCard/>
                                </>
                            )}
                        </div>
                    )
                })}
            </div>

            <div className="blog-page__pagination container">
                <Pagination totalItemsCount={blogs.length} onChange={onChangePage} itemsCountPerPage={8}
                            activePage={currentPage}
                            itemClass="pagination-button" itemClassFirst="pagination__first-btn"
                            itemClassLast="pagination__last-btn" activeClass="pagination__active-btn"/>
            </div>
        </div>
    )
}

export default Blogs