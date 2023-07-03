import "./Header.css";
import logo from "../../../Assets/logo.png"

function Header(): JSX.Element {
    return (
        <div className="Header">
			<img src={logo} alt="hi" className="Logo"/>
        </div>
    );
}

export default Header;
