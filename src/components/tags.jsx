import React from 'react';
import '../styles/tags.css'

const Tags = ( { tags } ) =>
{
    
    return (

    <ul className="Tags">
        { tags.map( ( tag) => 
        <li className="tags_texte" key={tag}>
            {tag}
        </li>
        )}
    </ul>
    )}

export default Tags