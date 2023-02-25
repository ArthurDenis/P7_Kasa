import React from 'react'
import Etoile from '../assets/etoile.png'
import '../styles/etoile.css'


const Rating = ( { value = 0 } ) =>
{
    
    return (

        <div className="note">
            {[1,2,3,4,5].map(number => <img src={Etoile} color={ value >= (number + 1) ? "#FF6060" : "#E3E3E3" } key={number.toString()} alt="Note" />
            )}
        </div>
        
    )
}
export default Rating