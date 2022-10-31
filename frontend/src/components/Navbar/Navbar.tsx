import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";

export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt="BlipQuiz" />
            <img src={menu} alt="menu" />
        </nav>
    )
}
