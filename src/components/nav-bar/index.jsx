import { NavLink } from "react-router-dom";

import './nav-bar.css'

export const NavBar = ({user, onAuthButtonClick}) => {
    const activeClassName = "underline";

    return (
        <nav>
            <ul className="NavBar__list">
                <li>
                    <NavLink
                    to="/"
                >
                    Main
                </NavLink>
                </li>

                <li>
                    <NavLink
                    to="/register"
                >
                </NavLink>
                Login
                </li>
            </ul>

            <button onClick={onAuthButtonClick}>
                {user ? "Sign out" : "Sign out"}
            </button>
        </nav>
    )
}