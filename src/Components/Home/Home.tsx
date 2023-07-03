import { NavLink } from "react-router-dom";
import "./Home.css";
import { useEffect, useState } from "react";

function Home(): JSX.Element {

    const [greeting, setGreeting] = useState<string>("Hello")
    useEffect(()=>{
        let counter = 0;
        const greetings = ["שלום", "Hello", "¡Hola!", "Bonjour", "Hallo", "Ciao", "Olá", "Привет"];

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
			
            <h1 className="Greeting">{greeting}</h1>
            
            <div className="TextContainer">

                <p>Welcome to my portfolio website! I'm <strong>Gershon Bookey</strong>, a MERN stack developer with a passion for crafting exceptional web applications. With expertise in MySQL, Node.js, Express.js, React, and various related technologies, I thrive on building robust and intuitive solutions.</p>

                <p>My journey in the world of programming began with a sense of curiosity that quickly evolved into a deep love for problem-solving. I find joy in creating efficient and scalable code that delivers a seamless user experience. From conceptualizing ideas to bringing them to life, I embrace the challenges and rewards of software development.</p>

                <p>Beyond my technical skills, I bring a vibrant and outgoing personality to every project I undertake. I believe in fostering a positive and collaborative work environment, where creativity and teamwork can thrive. Constantly seeking new knowledge and learning opportunities, I stay up-to-date with the latest industry trends and best practices to deliver innovative solutions.</p>

                <p>I am currently seeking a work environment that aligns with my skills and values. If you're looking for a dedicated MERN stack developer who brings both expertise and a fun-filled approach to projects, I would love to connect and explore potential opportunities.</p>

                <p>Thank you for visiting my portfolio website, and I look forward to the exciting possibilities that lie ahead.</p>

            </div>
            
            <div>
                <NavLink to="/about">
                    Who is Gershon Bookey?
                </NavLink>
            </div>            

        </div>
    );
}

export default Home;
