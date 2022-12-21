import React from 'react';
import '../styles/main.css'
import Box from '../components/box.jsx'

function Home ()
{
    return(
        <div className="main_contenant">
            <div>
                <h1>Chez vous, partout et ailleurs</h1>

            </div>
            <div className="main_board">
                <div>
                    < Box />
                </div>
            </div>
        </div>
    )
}

export default Home