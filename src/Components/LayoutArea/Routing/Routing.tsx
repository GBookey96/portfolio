import { Route, Routes } from "react-router-dom";
import "./Routing.css";
import Home from "../../Home/Home";
import PageNotFound from "../PageNotFound/PageNotFound";
import AboutMe from "../../AboutMe/AboutMe";
import Projects from "../../Projects/Projects";
import ContactMe from "../../ContactMe/ContactMe";
import Technologies from "../../Technologies/Technologies";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<AboutMe/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/contact" element={<ContactMe/>}/>
                <Route path="/techs" element={<Technologies/>}/>

                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </div>
    );
}

export default Routing;
