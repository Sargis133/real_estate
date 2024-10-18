import {Outlet, useLocation} from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {useEffect} from "react";

function Default() {
    const {pathname} = useLocation()

    useEffect(() => {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior:"smooth"
        })
    }, [pathname]);

    return(
        <div>
            <Header />
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Default