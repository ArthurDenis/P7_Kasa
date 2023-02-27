import React from 'react';
import '../styles/logement.css'
import Carrousel from "../components/carrousel";
import Error from '../pages/Error'
import { useParams } from 'react-router-dom'
import data from '../data/data.json'
import Rating from '../components/star'
import Tags from '../components/tags'
import Dropdown from '../components/dropdown'


const Logement = () => 
{ 
    const params = useParams()
    const location = data.find( (rental) => rental.id === params.id )
    
    if (!location) return <Error />
    return (
        <main className="logement_contenant">
            <div className='carrousel_container'>
                <Carrousel source={location.pictures} slidesNumber={location.pictures.length} />
            </div>
            <section className="informations_principales">
                <div className="en_tete">
                    <h1>{location.title}</h1>
                    <div className="host">
                        <span className="host_name">{location.host.name}</span>
                        <img src={location.host.picture} alt="Owner" className="host_photo"/>
                    </div>
                </div>
                <div className="localisation">
                    <p>{location.location}</p>
                </div>
            </section>
            
            <div className="tags_rating">
                <Tags tags={location.tags} />
                <Rating value={parseInt(location.rating)} />
            </div>

            <div className="container_dropdown">
                <Dropdown title="Description" text={location.description}></Dropdown>
                <Dropdown title="Equipements" text=
                    <ul className='dropdown_liste'>{location.equipments.map((equipment) => (
                        <li key={equipment}>{equipment}</li>
                    ))}</ul>
                ></Dropdown>
            </div>

        </main>

    )
}

export default Logement;