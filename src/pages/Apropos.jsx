import React from 'react';
import '../styles/apropos.css'
import Dropdown from '../components/dropdown.jsx'
import banner from '../assets/banner_apropos.png'

function Apropos()
{
    return (
        <div className="apropos_contenant">
            <img src ={banner} alt ="Paysage de montagne" className ="image_banner" />
            <div className="contenant_dropdown">
                <Dropdown title="Fiabilité" text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations régulièrement vérifiées par nos équipes."/>
                <Dropdown title="Respect" text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement disciminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
                <Dropdown title="Service" text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
                <Dropdown title="Sécurité" text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet de vérifier que les standards sont bein respectés. Nous organisons également des ateliers sur la sécurité domestiques pour nos hôtes."/>
            </div>
            
        </div>

    )
}

export default Apropos