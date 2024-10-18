import WelcomeBlock from "../components/WelcomeBlock/WelcomeBlock";
import {useEffect, useState} from "react";
import AgentCard from "../components/AgentCard/AgentCard";
import EmptyCard from "../components/EmptyCard/EmptyCard";
import "../assets/styles/agents.css"

function Agents() {
    const [agents , setAgents] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/data/agents.json").then(res => res.json())
            .then(data => {
                const updatedAgents = data.agents.map(item => ({
                    ...item,
                    image: `/images/${item.image}`
                }));
                setAgents(updatedAgents);
            })
    }, []);

    return(
        <div className="agents-page">
            <WelcomeBlock pageName="Our Agents"/>

            <div className="agents-page__agents container">
                {agents.length > 0 ? (
                    agents.map((agent, index) => {
                        return(
                            <div key={agent.id} data-aos="fade-up" data-aos-delay={index * 100}>
                                <AgentCard agent={agent}/>
                            </div>
                        )
                    })
                ) : (
                    <>
                        <EmptyCard/>
                        <EmptyCard/>
                        <EmptyCard/>
                        <EmptyCard/>
                    </>
                )}
            </div>
        </div>
    )
}

export default Agents