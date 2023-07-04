import "./TechCards.css";

interface TechCardsProps {
	techName: string
    techLogo: string
    know: boolean
}

function TechCards(props: TechCardsProps): JSX.Element {
    return (
        <div className="TechCards">
            <img src={props.techLogo} alt="" />
            <span>{props.techName}</span>
            {!props.know && <>
            <span className="ComingSoon">
                <span>Coming Soon!</span>
            </span>
            </>}
        </div>
    );
}

export default TechCards;
