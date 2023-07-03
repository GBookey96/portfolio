import "./AboutMe.css";

function AboutMe(): JSX.Element {
    const now = new Date();
    const myBirthdate = new Date('1996-10-30');
    const ageDiff = now.getTime() - myBirthdate.getTime();
    const ageDate = new Date(ageDiff); // age in milliseconds
    const age = Math.abs(ageDate.getUTCFullYear() - 1970); // calculate the difference in years
    
    
    
    return (
        <div className="AboutMe">
            <div className="WhoAmI">
                <h2>Who Am I?</h2>
                <p>My name is Gershon Bookey. I am {age} years old.</p>
                <p>I am married with one child, and we live in Jerusalem.</p>
            </div>
            <div className="LookingFor">
                <h2>What Am I Looking For?</h2>
                
            </div>
			
            
        </div>
    );
}

export default AboutMe;
