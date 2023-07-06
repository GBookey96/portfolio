import { NavLink } from "react-router-dom";
import "./PageNotFound.css";
import { Button } from "react-bootstrap";

function PageNotFound(): JSX.Element {
    return (
        <div className="PageNotFound">
			<h1>404 Error: Lost in the Digital Cosmos!</h1>
            <p>Whoops! It seems you've ventured into uncharted territory, encountering a wormhole to a non-existent dimension. Our interstellar navigational systems, powered by TypeScript thrusters, are unable to chart a course to the requested destination. However, fret not, intrepid explorer! While our developers decode the mysteries of this digital cosmos, take a moment to embark on an extraordinary journey through Gershon Bookey's full-stack web development wonders:</p>

            <ul>
                <li><NavLink to="/about"><span className="Link404Page">About Page</span></NavLink> - Learn more about Gershon Bookey and the exciting journey behind the scenes.</li>
                <li><NavLink to="/projects"><span className="Link404Page">Projects Page</span></NavLink> - Dive into a showcase of remarkable full-stack web development projects.</li>
            </ul>


            <p>Remember, in the vast expanse of the digital cosmos, even seasoned explorers occasionally veer off course. But fear not, for the stars still shine brightly! Click the button below to return to Gershon's stellar portfolio, where full-stack web development galaxies await your discovery.</p>

            <NavLink to="/"><span className="Link404Page">Return to the home page</span></NavLink>

            <p>If you require navigation assistance through this cosmic labyrinth, our star-faring support crew, fluent in both TypeScript and human languages, stands ready to guide you. Contact them on <NavLink to="/contact">our contact page</NavLink>.</p>
        </div>
    );
}

export default PageNotFound;
