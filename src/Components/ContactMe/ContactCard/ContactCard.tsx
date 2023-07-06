import { Button } from "react-bootstrap";
import "./ContactCard.css";

interface ContactCardProps {
    contactImg: string
    contactLink: string
    contactText: string
    disabled?: boolean
}

function ContactCard(props: ContactCardProps): JSX.Element {
    
    return (
        <div className="ContactCard">
            <img src={props.contactImg} alt="" className="ContactImg"/>

            {props.disabled && <>
                <Button className="DisabledContactButton">
                    <small>Try again between 10am and 5pm Israeli time...</small>
                </Button>
                
            </>}
            {!props.disabled && <>
                <a href={props.contactLink} target="_blank">
                    <Button className="ContactButton">
                        {props.contactText}
                    </Button>
                </a>
            </>}
            

        </div>
    );
}

export default ContactCard;
