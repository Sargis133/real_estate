import Icons from "../Icons/Icons"
import "./filterOptions.css"
import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {propertyKeywords} from "../../utils/propertyKeywords";

function FilterOptions() {
    const [buyType, setBuyType] = useState("buy")
    const [keywords, setKeywords] = useState(propertyKeywords)
    const [selectedKeywords, setSelectedKeywords] = useState([])
    const [keywordInput, setKeywordInput] = useState('')
    const [propertyType, setPropertyType] = useState('all')
    const [location, setLocation] = useState('')
    const [price, setPrice] = useState('5000000')
    const navigateTo = useNavigate()

    const keywordsDropdownBlock = useRef(null)

    const filtersBlock = useRef(null)

    useEffect(() => {
        filtersBlock.current.classList.add('animation')
        setTimeout(() => filtersBlock.current.classList.remove('animation'), 200)
    }, [buyType]);

    useEffect(() => {
        setKeywords(prevKeywords => {
            return prevKeywords.sort((a, b) => {
                const aMatch = a.name.toLowerCase().indexOf(keywordInput.toLowerCase()) >= 0;
                const bMatch = b.name.toLowerCase().indexOf(keywordInput.toLowerCase()) >= 0;

                if (aMatch && !bMatch) return -1;
                if (!aMatch && bMatch) return 1;
                return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
            });
        });
    }, [keywordInput]);

    useEffect(() => {
        window.addEventListener('click', function(e) {
            if(!keywordsDropdownBlock.current?.contains(e.target)) {
                setKeywordInput('')
            }
        })
    }, []);

    function onSearchItems() {
        const keywordFormat = selectedKeywords.map(item => item.value).join(',')
        navigateTo(`/properties?transaction=${buyType}${propertyType !== 'all' ? `&type=${propertyType}` : ''}${selectedKeywords.length > 0 ? `&keywords=${keywordFormat}` : ''}${location ? `&country=${location}` : ''}&price=${price}`)
    }

    function onDeleteKeywordItem(deleteItem) {
        const filter = selectedKeywords.filter(item => item.value !== deleteItem)
        setSelectedKeywords(filter)
    }

    return (
        <div className="filter-options container">
            <div className="filter-options__type-buttons">
                <button
                    onClick={() => setBuyType('buy')}
                    className={`default-btn green-btn filter-options__type-btn ${buyType === "buy" ? 'selected' : ''}`}>Buy
                    Properties
                </button>
                <button
                    onClick={() => setBuyType('rent')}
                    className={`default-btn green-btn filter-options__type-btn ${buyType === "rent" ? 'selected' : ''}`}>Rent
                    Properties
                </button>
            </div>

            <div ref={filtersBlock} className="filter-options__filter-cols">

                <div className="filter-cols__filter-col filter-col__keywords">
                    <p className="filter-col__text">enter keyword</p>
                    <div className="filter-col__selected-keywords">
                        {selectedKeywords.map(item => {
                            return (
                                <p key={item.value}>
                                    {item.name}
                                    <span onClick={() => onDeleteKeywordItem(item.value)}>
                                        <Icons name="close" stroke="#979797"/>
                                    </span>
                                </p>
                            )
                        })}
                    </div>
                    <div className="filter-col__option ">
                        <Icons name='search' stroke="rgba(0,0,0,0.2)"/>
                        <input onChange={(e) => setKeywordInput(e.target.value)} type="text" placeholder="Enter Keyword"
                               className="filter-col__input"/>
                    </div>
                    {keywordInput.length > 0 &&
                        <div className="filter-col__keyword-options" ref={keywordsDropdownBlock}>
                            {keywords.map(item => {
                                return (
                                    <p key={item.id}
                                       onClick={() => setSelectedKeywords([...selectedKeywords, item])}>{item.name}</p>
                                )
                            })}
                        </div>
                    }
                </div>

                <div className="filter-cols__filter-col">
                    <p className="filter-col__text">property type</p>
                    <div className="filter-col__option">
                        <Icons name='arrow-bottom' width="1.5rem" height="1.5rem" fill="rgba(0,0,0,0.2)"/>
                        <select onChange={(e) => setPropertyType(e.target.value)}
                                className="filter-col__dropdown" defaultValue={propertyType}>
                            <option value="all">All</option>
                            <option value="single-family">Single Family</option>
                            <option value="multi-family">Multi Family</option>
                            <option value="mobile">Mobile</option>
                            <option value="farm">Farm</option>
                            <option value="townhome">Town Home</option>
                            <option value="land">Land</option>
                        </select>
                    </div>
                </div>

                <div className="filter-cols__filter-col">
                    <p className="filter-col__text">location</p>
                    <div className="filter-col__option">
                        <Icons name='location' width="0.8rem" height="0.8rem" fill="rgba(0,0,0,0.2)"/>
                        <input onChange={(e) => setLocation(e.target.value)} type="text" placeholder="Search Location"
                               className="filter-col__input"/>
                    </div>
                </div>

                <div className="filter-cols__filter-col">
                    <p className="filter-col__text">price limit</p>
                    <div className="filter-col__option">
                        <Icons name='arrow-bottom' width="1.5rem" height="1.5rem" fill="rgba(0,0,0,0.2)"/>
                        <select onChange={(e) => setPrice(e.target.value)} className="filter-col__dropdown"
                                defaultValue={price}>
                            <option value="max">Max</option>
                            <option value="1000000">$1,000,000</option>
                            <option value="400000">$400,000</option>
                            <option value="300000">$300,000</option>
                            <option value="200000">$200,000</option>
                            <option value="100000">$100,000</option>
                            <option value="50000">$50,000</option>
                            <option value="10000">$10,000</option>
                            <option value="100">$100</option>
                        </select>
                    </div>
                </div>

                <div className="filter-cols__filter-btn">
                    <button onClick={onSearchItems} className="default-btn green-btn">search</button>
                </div>

            </div>
        </div>
    )
}

export default FilterOptions