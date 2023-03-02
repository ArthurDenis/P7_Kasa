import React from 'react';
import '../styles/box.css';
import data from '../data/data.json';

function Box ()
{
    return(
            <div className="card">
                {data.map(logement =>( // La fonction map permet de ressortir les éléments du tableau de data l'un après l'autre et créer une entrée pour chaque
                    <a href={`Logement/${logement.id}`} key={logement.id}> {/*On va chercher l'id dans l'array pour chaque élément créer */}
                        <img src={logement.cover} alt="Photos du logement" className="Photo" />
                        <h2>{logement.title}</h2>
                    </a>
                ))}
            </div>
        )
};

export default Box