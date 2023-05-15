import React from "react";
import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import avion from './assets/Avion3.png';
import { NavLink, Link } from "react-router-dom";


export default function NavBar() {
    return (
        <nav>
            <ul className="nav-menu">
                <h2>
                    <Link to='./'>
                        <li>
                            <div className="avion">
                                <img src={avion} alt="avion" />
                            </div>
                        </li>

                    </Link>
                </h2>

                <li className="nav-item">
                    <a className="nav-link" href="/">
                        Home
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/">
                        Europa
                    </a>
                    <NavLink to={`./continente/Europa`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Europa</NavLink>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        Asia
                    </a>
                    <NavLink to={`./continente/Asia`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Asia</NavLink>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        America
                    </a>
                    <NavLink to={`./continente/America`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>America</NavLink>
                </li>
                <CartWidget />
            </ul>
        </nav>
    );
}



