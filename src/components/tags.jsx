import React from 'react';
import '../styles/tags.css'

const Tags = ( { tags } ) =>
{
    
    return (

    <ul className="Tags">
        { tags.map( ( tag) =>  //Ici la fonction map permet de ressortir les éléments du tableau de donnée (voir commentaire sur Logement.jsx)
        <li className="tags_texte" key={tag}>
            {tag}
        </li>
        )}
    </ul>
    )}

export default Tags