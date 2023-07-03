import "./Footer.css";

function Footer(): JSX.Element {
    const now = new Date()
    return (
        <div className="Footer">
			© {now.getFullYear()} Gershon Bookey
        </div>
    );
}

export default Footer;
