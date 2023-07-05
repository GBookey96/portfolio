import { NavLink } from "react-router-dom";
import "./Projects.css";
import Button from "react-bootstrap/esm/Button";
import ProjectsCards from "./ProjectsCards/ProjectsCards";

import travelhubImg from "../../Assets/projectImgs/TravelHub.png"
import cryptoInfoImg from "../../Assets/projectImgs/CryptoInfo.png"
import portfolioImg from "../../Assets/projectImgs/Portfolio.png"

function Projects(): JSX.Element {

    const projects = [
        {
            name: "Crypto Info",
            github: "https://github.com/GBookey96/crypto-info",
            url: "https://gbookey96.github.io/crypto-info/",
            techs: ["HTML", "CSS", "JavaScript", "jQuery"],
            image: cryptoInfoImg,
            description: "Retrieves info about different cryptocurrencies from a third-party API, and displays them in aesthetically pleasing cards. There is also the ability to tag up to 5 coins, as well as search through them all."
        },
        {
            name: "TravelHub",
            github: "https://github.com/GBookey96/vacations",
            url: "",
            techs: ["HTML", "CSS", "TypeScript", "Node.js", "express.js", "React", "Redux"],
            image: travelhubImg,
            description: `This is a Full Stack project for a package vacation website
            It has login and register pages. The details are stored in a database I built.
            The main page has the vacations shown in cards. These are all retreived using API and MySQL requests using the backend and the database.
            A regular user has the ability to view and follow vacations, while the admin can add, edit and delete vacations.`
        },
        {
            name: "My Portfolio",
            github: "https://github.com/GBookey96/portfolio",
            url: "https://gershon-bookey-portfolio.vercel.app/",
            techs: ["HTML", "CSS", "Typescript", "React"],
            image: portfolioImg,
            description: "This React App showcases the skills I have learnt, along with the projects I have built."
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
                {projects.map(p => <ProjectsCards key={p.name} name={p.name} github={p.github} url={p.url} techs={p.techs} image={p.image} description={p.description}/>)}
            </div>
            
        </div>
    );
}

export default Projects;
