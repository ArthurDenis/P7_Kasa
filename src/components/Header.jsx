import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/footer.css'

function Header()
{
    return (
        <div className ="header">
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="">A propos</Link>
            </nav>
        </div>
    )
}

export default Header