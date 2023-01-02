import React from 'react';
import '../styles/apropos.css'
import Dropdown from '../components/dropdown.jsx'

function Apropos()
{
    return (
        <div className="apropos_contenant">
            <img alt ="" />
            <div classname="contenant_dropdowns">
                <Dropdown text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations régulièrement vérifiées par nos équipes."/>
                <Dropdown text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement disciminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
                <Dropdown text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
                <Dropdown text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet de vérifier que les standards sont bein respectés. Nous organisons également des ateliers sur la sécurité domestiques pour nos hôtes."/>
            </div>
            
        </div>

    )
}

export default Apropos