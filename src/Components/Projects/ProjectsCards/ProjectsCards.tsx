import { Button } from "react-bootstrap";
import "./ProjectsCards.css";
import { useState } from 'react';

interface ProjectsCardsProps {
	name: string
    github: string
    url: string
    techs: string[]
    image: string
    description: string
}

function ProjectsCards(props: ProjectsCardsProps): JSX.Element {

    let techList = ""

    for(let i = 0; i < props.techs.length; i++) {
        techList += props.techs[i]
        if(i !== props.techs.length - 1) techList += " || "
    }

    const [showModal, setShowModal] = useState<boolean>(false)
    function toggleModal() {
        setShowModal(!showModal)
    }

    return (
        <div className="ProjectsCards">
			<h2>{props.name}</h2>
            <img src={props.image} alt="" />
            <a href={props.github} target="_blank">
                <Button className="ProjectCardButton">Github</Button>
            </a>
            {props.url && <>
                <a href={props.url} target="_blank">
                    <Button className="ProjectCardButton">Website</Button>
                </a>
            </>}
            <div className="Techs">
                <p>{techList}</p>
            </div>
            {!showModal && <>
                <div onClick={()=>toggleModal()} className="ReadMore">
                    Read More...
                </div>
            </>}
            
            {showModal && <>
                <div className="Description" onClick={()=>toggleModal()}>
                    <p>{props.description}</p>
                </div>
            </>}
            
            
        </div>
    );
}

export default ProjectsCards;
