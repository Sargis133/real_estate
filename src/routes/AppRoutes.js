import {BrowserRouter, Route, Routes} from "react-router-dom";
import Default from "../layouts/Default";
import Home from "../pages/Home";
import About from "../pages/About";
import Properties from "../pages/Properties";
import Agents from "../pages/Agents";
import Contact from "../pages/Contact";
import Blogs from "../pages/Blogs";
import Blog from "../pages/Blog";
import Property from "../pages/Property";

function AppRoutes() {
        return(
                <BrowserRouter>
                        <Routes>
                                <Route path="/" element={<Default />}>
                                    <Route index element={<Home />}/>
                                    <Route path="about" element={<About />}/>
                                    <Route path="properties" element={<Properties />}/>
                                    <Route path="property/:id" element={<Property />}/>
                                    <Route path="agents" element={<Agents />}/>
                                    <Route path="blogs" element={<Blogs />}/>
                                    <Route path="blog/:id" element={<Blog />}/>
                                    <Route path="contact" element={<Contact />}/>
                                </Route>
                        </Routes>
                </BrowserRouter>
        )
}

export default AppRoutes