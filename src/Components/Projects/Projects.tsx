import { NavLink } from "react-router-dom";
import "./Projects.css";
import Button from "react-bootstrap/esm/Button";
import travelhubImg from "../../Assets/projectImgs/TravelHub.png"
import ProjectsCards from "./ProjectsCards/ProjectsCards";

function Projects(): JSX.Element {

    const projects = [
        {
            name: "Crypto Info",
            github: "https://github.com/GBookey96/crypto-info",
            url: "https://gbookey96.github.io/crypto-info/",
            techs: ["HTML", "CSS", "JavaScript", "jQuery"],
            image: ""
        },
        {
            name: "TravelHub",
            github: "https://github.com/GBookey96/vacations",
            url: "",
            techs: ["HTML", "CSS", "TypeScript", "Node.js", "express.js", "React", "Redux"],
            image: travelhubImg
        },
        {
            name: "My Portfolio",
            github: "https://github.com/GBookey96/portfolio",
            url: "https://gershon-bookey-portfolio.vercel.app/",
            techs: ["HTML", "CSS", "Typescript", "React"],
            image: ""
        }
    ]

    return (
        <div className="Projects">
			<h2>Projects I have built</h2>

            <NavLink to="/">
                <Button className="topLeft">
                    Home
                </Button>                    
            </NavLink>
            <div className="CardContainer">
                {projects.map(p => <ProjectsCards key={p.name} name={p.name} github={p.github} url={p.url} techs={p.techs} image={p.image}/>)}
            </div>
            
        </div>
    );
}

export default Projects;
