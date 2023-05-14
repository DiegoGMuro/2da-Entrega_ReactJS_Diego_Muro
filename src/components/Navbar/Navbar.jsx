import React from "react";
import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import avion from './assets/Avion3.png'


export default function NavBar() {
    return (
        <nav>
            <ul className="nav-menu">
                <h2>
                    <li>
                        <div className="avion">
                            <img src={avion} alt="avion" />
                        </div>
                    </li>
                </h2>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        Destinos
                    </a>
                    <ul>
                        <li><a href="/Europa">Europa</a></li>
                        <li><a href="/Asia">Asia</a></li>
                        <li><a href="/America">America</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        Iniciar sesion
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        Contacto
                    </a>
                </li>
                <CartWidget />
            </ul>
        </nav>
    );
}



