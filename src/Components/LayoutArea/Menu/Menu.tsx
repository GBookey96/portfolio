import { NavLink } from "react-router-dom";
import "./Menu.css";
import Button from "react-bootstrap/esm/Button";
import { useState } from 'react';

function Menu(): JSX.Element {
    const [menuVisible, setMenuVisible] = useState<boolean>(false)
    return (
        <div className="WholeMenu">
            {!menuVisible && <>
                <div className="OpenMenu" onClick={()=>{setMenuVisible(!menuVisible)}}>
                    <Button>
                        Menu
                    </Button>
                </div>
            </>}
            {menuVisible && <>
                <div className="Menu" onClick={()=>{setMenuVisible(!menuVisible)}}>

                    <NavLink to="/">
                        <Button className="Button">
                            Home
                        </Button>                    
                    </NavLink>

                    <NavLink to="/about">
                        <Button className="Button">
                            Who is Gershon Bookey?
                        </Button>                    
                    </NavLink>


                    <NavLink to="/projects">
                        <Button className="Button">
                            What Can I Show For Myself?
                        </Button>                    
                    </NavLink>


                    <NavLink to="/contact">
                        <Button className="Button">
                            How Can You Contact Me?
                        </Button>                    
                    </NavLink>

                    <NavLink to="/techs">
                        <Button className="Button">
                            What Do I Know?
                        </Button>                    
                    </NavLink>     


                </div>
            </>}
            
        </div>
        
    );
}

export default Menu;
