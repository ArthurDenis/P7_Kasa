import React from 'react';
import '../styles/main.css'
import Box from '../components/box.jsx'
import banner from '../assets/banner.png'

function Main ()
{
    return(
        <div className="main_contenant">
            <div className="banner_container">
                <h1>Chez vous, partout et ailleurs</h1>
                <img src={banner} alt="Paysage de montagne" className="banner_Image"/>
            </div>
            <div className="main_board">
                <div>
                    < Box />
                </div>
            </div>
        </div>
    )
}

export default Main