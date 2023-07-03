import { NavLink } from "react-router-dom";
import "./Home.css";
import { useEffect, useState } from "react";

function Home(): JSX.Element {

    const [greeting, setGreeting] = useState<string>("Hello")
    useEffect(()=>{
        let counter = 0;
        const greetings = ["Hello", "שלום", "¡Hola!", "Bonjour", "Hallo", "Ciao", "Olá", "Привет", "你好", "こんにちは"];

        const greetingInterval = setInterval(() => {
            setGreeting(greetings[counter])
            counter++
            if (counter >= greetings.length) counter = 0
        }, 2000)

        return ()=> {
            clearInterval(greetingInterval)
        }

    },[])

    

    return (
        <div className="Home">
			
            <div className="GreetingContainer">
                <h1 className="Greeting">{greeting}</h1>
            </div>
            
            <div>
                <NavLink to="/about">
                    About Me
                </NavLink>
                
            </div>            

        </div>
    );
}

export default Home;
