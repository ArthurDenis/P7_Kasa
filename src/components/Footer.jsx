import React from 'react';
import '../styles/footer.css'
import logo from "../assets/logo_footer.png"

function Footer()
{
    return (
        <div className ="footer">
            <p className ="footer_texte">©2020 Kasa. All rights reserved</p>
            <img src ={logo} alt="Logo de Kasa" />
        </div>
    )
}

export default Footer