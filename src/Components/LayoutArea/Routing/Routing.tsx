import { Route, Routes } from "react-router-dom";
import "./Routing.css";
import Home from "../../Home/Home";
import PageNotFound from "../PageNotFound/PageNotFound";
import AboutMe from "../../AboutMe/AboutMe";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<AboutMe/>}/>

                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </div>
    );
}

export default Routing;
