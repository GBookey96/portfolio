import { NavLink } from "react-router-dom";
import "./ContactMe.css";
import Button from "react-bootstrap/esm/Button";
import ContactCard from "./ContactCard/ContactCard";
import waLogo from "../../Assets/contactLogos/waLogo.png"
import liLogo from "../../Assets/contactLogos/liLogo.png"
import phoneLogo from "../../Assets/contactLogos/phoneLogo.png"
import emailLogo from "../../Assets/contactLogos/emailLogo.png"
import { useEffect, useState } from "react";

function ContactMe(): JSX.Element {

    const [phoneDisabled, setPhoneDisabled] = useState<boolean>(false)


    useEffect(()=>{
        
        const date = new Date();
        const options: Intl.DateTimeFormatOptions = {
          hour12: false,
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        };
        
        const israelTimeOnly = date.toLocaleTimeString("en-US", {
          ...options,
          timeZone: "Asia/Jerusalem"
        });
        const currentHour = parseInt(israelTimeOnly.split(":")[0], 10);
        currentHour >= 10 && currentHour < 20 ? setPhoneDisabled(false) : setPhoneDisabled(true)
        
    },[])



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
                    <ContactCard contactImg={liLogo} contactLink="https://www.linkedin.com/in/gershon-bookey-05639626a/" contactText="Check out my LinkedIn profile"/>
                    <ContactCard contactImg={phoneLogo} contactLink="tel:+972585629632" contactText="Call Me! I'm always in the mood!" disabled={phoneDisabled}/>
                    <ContactCard contactImg={emailLogo} contactLink="mailto:gershbookey@gmail.com" contactText="Feel free to reach out by email" />

                </div>
                    
        </div>
    );
}

export default ContactMe;
