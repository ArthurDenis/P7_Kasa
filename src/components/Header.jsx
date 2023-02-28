import React from 'react';
import {Link} from 'react-router-dom' //Link permet de faire les liens dans l'appli, se comporte comme anchor
import '../styles/header.css'
import logo from '../assets/logo.png'

function Header()
{
    return (
        <header className ="header">
            <img src ={logo} alt ="Logo de Kasa" className="header_logo"/>
            <nav className="header_nav">
                <Link to="/" className ="acceuil_header">Accueil</Link>
                <Link to="/a_propos" className="apropos_header">A propos</Link>
            </nav>
        </header>
    )
}

export default Header