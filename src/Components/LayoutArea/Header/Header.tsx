import "./Header.css";
import logo from "../../../Assets/logo.png"
import { NavLink } from "react-router-dom";
function Header(): JSX.Element {
    
    return (
        <div className="Header">
            
			<NavLink to="/">
                <img src={logo} alt="hi" className="Logo"/>
            </NavLink>
            
        </div>
    );
}

export default Header;
