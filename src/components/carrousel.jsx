import React, { useState } from "react";
import left from "../assets/fleche_retour.png";
import right from "../assets/fleche_suivante.png";

const Carrousel = (props) => {
    const photo = props.source;
    const length = props.slidesNumber;
    const onePhoto = length <= 1;

    const [current, setCurrent] = useState(0);
    const previousSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    return (
        <>
            <span
                className={onePhoto ? "no-arrow" : "arrow arrow-left"}
                onClick={previousSlide}>
                <img src={left} alt="previous" />
            </span>
            <span
                className={onePhoto ? "no-arrow" : "arrow arrow-right"}
                onClick={nextSlide}>
                <img src={right} alt="next" />
            </span>
            <div className="carrousel">
                {photo.map((picture, index) => (
                    <div key={index} className={index}>
                        {index === current && <img src={picture} alt="" />}
                    </div>
                ))}{" "}
            </div>
            <span className="page-count">
                {current + 1}/{length}
            </span>
        </>
    );
};

export default Carrousel;