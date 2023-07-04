import { NavLink } from "react-router-dom";
import "./ContactMe.css";
import Button from "react-bootstrap/esm/Button";
import ContactCard from "./ContactCard/ContactCard";
import waLogo from "../../Assets/waLogo.png"
import liLogo from "../../Assets/liLogo.png"
import phoneLogo from "../../Assets/phoneLogo.jpg"
import emailLogo from "../../Assets/emailLogo.jpg"

function ContactMe(): JSX.Element {
    return (
        <div className="ContactMe">
			<h2>Contact Me</h2>
                        
                <NavLink to="/">
                    <Button className="topLeft">
                        Home
                    </Button>                    
                </NavLink>
                
                <div className="CardContainer">
                    <ContactCard contactImg={waLogo} contactLink="https://wa.link/jh39ag" contactText="I would love to chat on WhatsApp"/>
                    <ContactCard contactImg={liLogo} contactLink="asd" contactText="Check out my LinkedIn profile"/>
                    <ContactCard contactImg={phoneLogo} contactLink="aasd" contactText="Call Me! I'm always in the mood" />
                    <ContactCard contactImg={emailLogo} contactLink="" contactText="Feel free to reach out by email" />

                </div>
                    
        </div>
    );
}

export default ContactMe;
