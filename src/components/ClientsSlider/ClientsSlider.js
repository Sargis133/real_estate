import Icons from "../Icons/Icons";
import {Carousel} from "react-responsive-carousel";
import {allImages} from "../../assets/images/image";
import "./clientsSlider.css"

function ClientsSlider() {
    const clients = [
        {
            id: 0,
            name: 'Robert Scott',
            text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            position: 'marketing manager',
            img: allImages.agent_1
        },
        {
            id: 2,
            name: 'Robert Scott',
            text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            position: 'marketing manager',
            img: allImages.agent_2
        },
        {
            id: 3,
            name: 'Robert Scott',
            text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            position: 'marketing manager',
            img: allImages.agent_1
        },
        {
            id: 4,
            name: 'Robert Scott',
            text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            position: 'marketing manager',
            img: allImages.agent_1
        },
    ]

    return(
        <div>
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={1500} centerMode={true} centerSlidePercentage={33} showStatus={false}
                      className="container clients-slider">
                {
                    clients.map(client => {
                        return (
                            <div className="clients-slider__client-card" key={client.id}>
                                <div className="client-card__icon">
                                    <Icons name="quote" fill="#fff"/>
                                </div>
                                <p className="client-card__text">
                                    {client.text}
                                </p>
                                <div className="client-card__info">
                                    <img src={client.img} alt="client-image"
                                         className="client-card__image"/>
                                    <div className="client-card__text">
                                        <p className="client-card__name">{client.name}</p>
                                        <p className="client-card__position">{client.position}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </Carousel>
        </div>
    )
}

export default ClientsSlider