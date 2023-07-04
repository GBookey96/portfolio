import "./Technologies.css";
import TechCards from "./TechCards/TechCards";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

import htmlLogo from "../../Assets/techLogos/logo-html-5-256.png"
import cssLogo from "../../Assets/techLogos/logo-css-3-256.png"
import bootstrapLogo from "../../Assets/techLogos/bootstrap-256.png"
import nodejsLogo from "../../Assets/techLogos/logo-node-js-256.png"
import reactLogo from "../../Assets/techLogos/logo-react-256.png"
import githubLogo from "../../Assets/techLogos/github-256.png"
import jqueryLogo from "../../Assets/techLogos/jquery-256.png"
import mysqlLogo from "../../Assets/techLogos/mysql-256.png"
import reduxLogo from "../../Assets/techLogos/redux-256.png"
import tsLogo from "../../Assets/techLogos/typescript-256.png"
import vueLogo from "../../Assets/techLogos/vue-js-256.png"
import jsLogo from "../../Assets/techLogos/javascript-256.png"
import angularLogo from "../../Assets/techLogos/logo-angular-js-256.png"
import expressLogo from "../../Assets/techLogos/express-256.png"



function Technologies(): JSX.Element {

    const techArray = [
        {name: "HTML", image: htmlLogo, know: true},
        {name: "CSS", image: cssLogo, know: true},
        {name: "Bootstrap", image: bootstrapLogo, know: true},
        {name: "JavaScript", image: jsLogo, know: true},
        {name: "TypeScript", image: tsLogo, know: true},
        {name: "jQuery", image: jqueryLogo, know: true},
        {name: "React", image: reactLogo, know: true},
        {name: "Redux", image: reduxLogo, know: true},
        {name: "Node.js", image: nodejsLogo, know: true},
        {name: "express.js", image: expressLogo, know: true},
        {name: "MySQL", image: mysqlLogo, know: true},
        {name: "GitHub", image: githubLogo, know: true},
        {name: "AngularJS", image: angularLogo, know: false},
        {name: "Vue.js", image: vueLogo, know: false},

    ]

    return (
        <div className="Technologies">
			<h2>Technologies I know</h2>
                <NavLink to="/">
                    <Button className="topLeft">
                        Home
                    </Button>                    
                </NavLink>
                <div className="CardContainer">
                    {techArray.map(t => <TechCards key={t.name} techName={t.name} techLogo={t.image} know={t.know}/>)}
                </div>
            
        </div>
    );
}

export default Technologies;
