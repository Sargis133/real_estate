import "../assets/styles/properties.css"
import WelcomeBlock from "../components/WelcomeBlock/WelcomeBlock";
import FilterOptions from "../components/FilterOptions/FilterOptions";
import {useEffect, useState} from "react";
import PropertiesCard from "../components/PropertiesCard/PropertiesCard";
import {fetchProperties} from "../utils/fetchProperties";
import EmptyCard from "../components/EmptyCard/EmptyCard";
import Pagination from "react-js-pagination";
import {Link, useSearchParams} from "react-router-dom";

function Properties() {
    const [properties, setProperties] = useState(null)
    const [pageItems, setPageItems] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [params] = useSearchParams()

    useEffect(() => {
        onSlicePageItems()
    }, [properties]);

    useEffect(() => {
        const filters = {
            type: params.get("type"),
            country: params.get("country"),
            transaction: params.get("transaction"),
            price: params.get("price"),
            keywords: params.get("keywords")
        }
        fetchProperties(`https://real-estate12.p.rapidapi.com/v1/real-estate/${filters.transaction === "rent" ? 'rent' : 'sale'}?state=CA&city=${filters.country || `Los%20Angeles`}&page=1&sort=${filters.transaction === `rent` ? `newest` : `relevant`}${filters.price ? `&price_h=${filters.price}` : ''}${filters.type ? `&type=${filters.type}` : ''}`)
            .then(data => {
                try {
                    setProperties(JSON.parse(data).body)
                    console.log(data)
                } catch(err) {
                    console.log(err)
                }
            })

    }, [params]);

    function onChangePage(page) {
        setCurrentPage(page)
        onSlicePageItems(page)
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: "smooth"
        })
    }

    function onSlicePageItems(page = currentPage) {
        page = (page - 1) * 8
        const result = properties?.slice(page, page + 8)
        setPageItems(result)
    }

    return (
        <div className="properties-page">
            <WelcomeBlock pageName="properties"/>

            <div className="properties-page__options-block">
                <FilterOptions/>
            </div>

            {!pageItems || pageItems?.length === 0 ? (
                <div className="properties-page__loader">
                    <div className="loader"></div>
                </div>
            ) : (
                <>
                <div className="properties-page__properties container">

                        {pageItems.map((item, index) => {
                            return (
                                <div key={+item.property_id || index} data-aos="fade-up" data-aos-delay={index * 100}>
                                    {Object.keys(item)?.length > 1 ? (
                                        <Link to={`/property/${item.property_id}`} className="property-card-link">
                                            <PropertiesCard property={item}/>
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

                    <div className="properties-page__pagination container">
                        <Pagination totalItemsCount={properties.length} onChange={onChangePage} itemsCountPerPage={8}
                                    activePage={currentPage}
                                    itemClass="pagination-button" itemClassFirst="pagination__first-btn"
                                    itemClassLast="pagination__last-btn" activeClass="pagination__active-btn"/>
                    </div>
                </>
            )
            }

        </div>
    )
}

export default Properties