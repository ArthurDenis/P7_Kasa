import React from 'react';
import etoile_vide from '../assets/etoile_vide.png';
import etoile_pleine from '../assets/etoile_pleine.png';


const Rating = (props) => {
    const rate = props.value; /* La value est récupéré dans la data grâce à parseInt(location.rating) sur Logement.jsx
    On crée ensuite un array pour le nombre d'étoile possible*/
    const fullRate = [1, 2, 3, 4, 5];
    return (
        <div className="rate">
            {fullRate.map((score) => 
                rate >= score ?  //On compare les valeurs de l'array fullRate avec la value
                    ( <img
                        className="etoile etoile_pleine"
                        src={etoile_pleine}
                        alt="étoile pleine"
                        key={score.toString()}/>) 
                : 
                    ( <img  //Si la valeur de la value est inférieur à la valeur de fullRate alors on affiche une étoile vide
                        className="etoile etoile_vide"
                        src={etoile_vide}
                        alt="étoile vide"
                        key={score.toString()}/>)
            )}
        </div>
    )
};


export default Rating