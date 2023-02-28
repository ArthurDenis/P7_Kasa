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
    const params = useParams() //Permet d'aller récupérer les données corréespondant à l'id de la page
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
                    <p>{location.location}</p>
                    <Tags tags={location.tags} /> {/*Le components tags est appelé et nous lui donnons la localisation des datas qu'il doit utiliser*/}
                </div>
                <div className="rate_host">
                    <div className="host">
                        <span className="host_name">{location.host.name}</span>
                        <img src={location.host.picture} alt="Owner" className="host_photo"/>
                    </div>
                    <Rating value={parseInt(location.rating)} />
                </div>
            </section>

            <div className="container_dropdown">
                <Dropdown title="Description" text={location.description}></Dropdown> 
                <Dropdown title="Equipements" text= 
                    <ul className='dropdown_liste'>{location.equipments.map((equipment) => ( 
                        <li key={equipment}>{equipment}</li>
                    ))}</ul>
                ></Dropdown>{/* On va utiliser map pour aller chercher chaque équipement on construit une liste */}
            </div>

        </main>

    )
}

export default Logement;