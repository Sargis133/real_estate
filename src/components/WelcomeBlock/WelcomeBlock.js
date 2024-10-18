import {Link} from "react-router-dom";
import Icons from "../Icons/Icons";
import "./welcomeBlock.css"

function WelcomeBlock({pageName}) {
    return(
        <div className="welcome-block">
            <div className="welcome-block__text-content">
                <div className="welcome-block__links">
                    <Link to="/" className="welcome-block__link active">
                        Home
                        <Icons name="arrow-right-short" fill="rgba(250, 250, 250, 0.8)" width="0.8rem" height="0.8rem"/>
                    </Link>
                    <p className="welcome-block__link">
                        {pageName}
                        <Icons name="arrow-right-short" fill="rgba(250, 250, 250, 0.8)" width="0.8rem" height="0.8rem"/>
                    </p>
                </div>
                <p className="welcome-block__title">
                    {pageName}
                </p>
            </div>
        </div>
    )
}

export default WelcomeBlock