import React from 'react'
import etoile_vide from '../assets/etoile_vide.png'
import etoile_pleine from '../assets/etoile_pleine.png'


const Rating = (props) => {
    const rate = Number(props.value);
    const fullRate = [1, 2, 3, 4, 5];

    return (
        <div className="rate">
            {fullRate.map((score) =>
                rate >= score ? (
                    <img
                        className="etoile etoile_pleine"
                        src={etoile_pleine}
                        alt="étoile pleine"
                        key={score.toString()}
                    />) 
                : ( <img
                        className="etoile etoile_vide"
                        src={etoile_vide}
                        alt="étoile vide"
                        key={score.toString()}
                    />
                )
            )}
        </div>

    )}


export default Rating