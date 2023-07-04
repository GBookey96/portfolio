import { Button } from "react-bootstrap";
import "./ContactCard.css";

interface ContactCardProps {
    contactImg: string
    contactLink: string
    contactText: string
}

function ContactCard(props: ContactCardProps): JSX.Element {
    
    return (
        <div className="ContactCard">
                <img src={props.contactImg} alt="" className="ContactImg"/>
            <a href={props.contactLink} target="_blank">
                <Button className="ContactButton">
                    {props.contactText}
                </Button>
            </a>

        </div>
    );
}

export default ContactCard;
