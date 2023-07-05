import "./Header.css";
import logo from "../../../Assets/logo.png"
import { NavLink } from "react-router-dom";
import Weather from "./Weather/Weather";
function Header(): JSX.Element {
    
    const now = new Date()
    const time = now.getHours()
    let greeting = ""
    switch (true) {
        case time >= 6 && time <12:
            greeting = "Good Morning"
            break;

        case time >= 12 && time <18:
            greeting = "Good Afternoon"
            break;

        case time >= 18 && time < 22:
            greeting = "Good Evening"
            break;

        case time >= 22 && time < 24:
            greeting = "Good Night"
            break;

        case time >= 0 && time < 6:
            greeting = "Why are you even awake?"
            break;
    }


    return (

        <div className="Header">
            <div className="LeftSection">
                <strong>{greeting}</strong>
            </div>
            <div className="MiddleSection">
                <Weather />
            </div>
            <div className="RightSection">
                <NavLink to="/">
                    <img src={logo} alt="hi" className="Logo" />
                </NavLink>
            </div>
        </div>
    );
}

export default Header;
