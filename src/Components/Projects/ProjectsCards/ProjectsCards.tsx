import { Button } from "react-bootstrap";
import "./ProjectsCards.css";

interface ProjectsCardsProps {
	name: string
    github: string
    url: string
    techs: string[]
    image: string
}

function ProjectsCards(props: ProjectsCardsProps): JSX.Element {
    return (
        <div className="ProjectsCards">
			<h2>{props.name}</h2>
            <img src={props.image} alt="" />
            <a href={props.github} target="_blank">
                <div className="LinkButton">Github</div>
            </a>
            {props.url && <>
                <a href={props.url} target="_blank">
                    <div className="LinkButton">Website</div>
                </a>
            </>}
            
            <p>{props.url}</p>
            {props.techs.map(t => <li>{t}</li>)}
        </div>
    );
}

export default ProjectsCards;
