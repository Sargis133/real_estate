import {Link} from "react-router-dom";
import "./agentCard.css"
import Icons from "../Icons/Icons";

function AgentCard({agent}) {
    return (
        <div className="agent-card">
            <img src={`/images/${agent.image}`} alt="agent-img" className="agent-card__image"/>
            <p className="agent-card__listing">
                Listing
                <span>{agent.listings} properties</span>
            </p>
            <p className="agent-card__name">
                {agent.name}
            </p>
            <div className="agent-card__social-links">
                <Link to={agent.society?.twitter || '/'} target="_blank">
                    <Icons name="twitter" fill="#fff"/>
                </Link>
                <Link to={agent.society?.facebook || '/'} target="_blank">
                    <Icons name="facebook" fill="#fff"/>
                </Link>
                <Link to={agent.society?.gmail || '/'} target="_blank">
                    <Icons name="google" fill="#fff"/>
                </Link>
                <Link to={agent.society?.instagram || '/'} target="_blank">
                    <Icons name="instagram" fill="#fff"/>
                </Link>
            </div>
        </div>
    )
}

export default AgentCard