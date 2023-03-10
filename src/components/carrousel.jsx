import React, { useState } from "react";
import left from "../assets/fleche_retour.png";
import right from "../assets/fleche_suivante.png";
import "../styles/carrousel.css";

const Carrousel = (props) => {
    const photo = props.source;
    const length = props.slidesNumber;
    const onePhoto = length <= 1; //permet de ne pas afficher de flèche quand il n'y a qu'une photo dans la data
    //On définit la première slide et les comportements en cas de dernière et prémière photo dans la base de donnée
    const [current, setCurrent] = useState(0);
    const previousSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)};

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)};
    return (
        <>
            <span
                className={onePhoto ? "no_arrow" : "arrow arrow_left"} onClick={previousSlide}>
                <img src={left} alt="previous" />
            </span>
            <span
                className={onePhoto ? "no_arrow" : "arrow arrow_right"} onClick={nextSlide}>
                <img src={right} alt="next" />
            </span>  
            <span className={onePhoto ? "no_page_count" : "page_count"}>
                {current + 1}/{length}
            </span>
            <div className="carrousel">
                {photo.map((picture, index) => (
                    <div key={index} className={index}>
                        {index === current && <img src={picture} alt="" />}
                    </div>
                ))}{" "}
            </div>
        </>
    )
};

export default Carrousel;