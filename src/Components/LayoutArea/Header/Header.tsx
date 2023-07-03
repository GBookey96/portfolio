import "./Header.css";
import logo from "../../../Assets/logo.png"
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";
import Menu from "../Menu/Menu";

function Header(): JSX.Element {
    const [menuVisible, setMenuVisible] = useState<boolean>(false)
    return (
        <div className="Header">
			<NavLink to="/">
                <img src={logo} alt="hi" className="Logo"/>
            </NavLink>
            
        </div>
    );
}

export default Header;
