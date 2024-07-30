import React, {useEffect, useState} from "react";
import { useLocation, Link } from "react-router-dom";
import "./navbar.css";
import { currentUser } from "../../constants.js"


function NavBar() {

    const location = useLocation()
    const [isLoggedIn, setIsLoggedIn] = useState()
    const [currname, setCurrentName] = useState()

    useEffect(() => {
        console.log(location)
        if (location.pathname === '/login' || location.pathname === '/register') {
            setIsLoggedIn(false)
        } else {
            setIsLoggedIn(true)
            setCurrentName(localStorage.getItem(currentUser))
        }
    }, [location])

    return (
        <div>
            { isLoggedIn ? (
                <nav className="navbar">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <h1>NavBar is here for {currname}</h1>
                        </li>
                        <li className="nav-item">
                            <Link to="/logout" className="nav-link">
                                Logout
                            </Link>
                        </li>
                    </ul>
                </nav>
            ): (
                <nav className="navbar">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">
                                Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/register" className="nav-link">
                                Register
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}  
        </div>
        
        
    )
}

export default NavBar