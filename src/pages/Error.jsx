import React from 'react';
import '../styles/error.css'
import { Link } from "react-router-dom"; //Link permet de faire les liens dans l'appli, se comporte comme anchor
import error from '../assets/error.png'

function Error ()
{
    return (
        <div className="error_contenant">
            <div className="error">
                <img src={error} alt="Logo d'erreur 404" className ="error_logo"/>
                <h1>Oups, la page que vous demandez n'existe pas</h1>
                <Link to="/">Retourner sur la page d'accueil</Link>
            </div>
        </div>
    )
}

export default Error