import React, {useEffect, useState} from "react";
import { useLocation, Link } from "react-router-dom";
import "./navbar.css";
import { currentUser } from "../../constants.js"


function NavBar() {

    const location = useLocation()
    const [isLoggedIn, setIsLoggedIn] = useState()
    const [currname, setCurrentName] = useState()

    useEffect(() => {
        if (location.pathname === '/login') {
            setIsLoggedIn("login")
        } else if (location.pathname === '/register'){
            setIsLoggedIn("register")
        } else {
            setIsLoggedIn("else")
            setCurrentName(localStorage.getItem(currentUser))
        }
    }, [location])

    return (
        <div>
            {(() => {
                if (isLoggedIn === "else") {
                  return (
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
                  )
                } else if (isLoggedIn === "login") {
                  return (
                    <nav className="navbar">
                        <ul className="nav-list">
                            <li className="nav-item">
                                <Link to="/register" className="nav-link">
                                    Register
                                </Link>
                            </li>
                        </ul>
                    </nav>
                  )
                } else {
                  return (
                    <nav className="navbar">
                        <ul className="nav-list">
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </nav>
                  )
                }
              })()}  
        </div>
        
        
    )
}

export default NavBar