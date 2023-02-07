import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/footer.css'
import logo from '../assets/logo.png'

function Header()
{
    return (
        <div className ="header">
            <img src ={logo} alt ="logo" className="header_logo"/>
            <nav className="header_nav">
                <Link to="/" className ="acceuil_header">Accueil</Link>
                <Link to="/a_propos" className="apropos_header">A propos</Link>
            </nav>
        </div>
    )
}

export default Header