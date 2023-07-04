import "./AboutMe.css";
import me from "../../Assets/me.jpg"
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

function AboutMe(): JSX.Element {

    return (
        <div className="AboutMe">
            <h2>Who is Gershon Bookey?</h2>
                            
                    <NavLink to="/">
                        <Button className="topLeft">
                            Home
                        </Button>                    
                    </NavLink>

                <img src={me} alt="" />

                    <p>I was born and raised in the vibrant neighborhood of Golders Green, a culturally rich area in London, England. Growing up in this diverse community, I was exposed to a multitude of traditions and perspectives, which shaped my worldview from an early age.</p>

                    <p>My educational journey took me on a profound path of self-discovery and learning. After completing my basic education, I spent six transformative years immersing myself in the study of religious texts and philosophy at various educational institutions across London, Gateshead, and Jerusalem. These years were instrumental in deepening my understanding of Jewish traditions, and they instilled in me a strong commitment to lifelong learning.</p>

                    <p>The most significant milestones in my personal life was when I got married in December 2019. The joyous occasion took place in Melbourne, Australia, where my wife and I resided for nearly a year after our wedding. It was during this time that we welcomed the arrival of our precious son, Yanky, who brought immense joy and blessings to our lives.</p>

                    <p>After our memorable time in Melbourne, my family and I made the decision to return to Jerusalem, a city that holds a special place in our hearts. We have set up our home here and continue to pursue our studies and personal growth, dedicating ourselves to exploring various intellectual and philosophical disciplines. Jerusalem's rich history and spiritual atmosphere provide the perfect backdrop for our intellectual and spiritual development.</p>

                    <p>As I now turn towards web development, something that has always pulled at my heart, I hope to be able to do amazing things with it. Web development has captivated my interest, and I'm excited to explore its endless possibilities. While embarking on this new journey, I strive to integrate my passion for technology with my love for Torah and its values, finding harmony between these two aspects of my life.</p>
        <div className="EmptySection"></div>
        </div>
    );
}

export default AboutMe;
