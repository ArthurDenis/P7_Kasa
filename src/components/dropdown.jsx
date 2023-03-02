import React, {useState} from 'react';
import "../styles/dropdown.css";
import vector from "../assets/vector.png";


function Dropdown ( props )
{
    const [isOpen, setOpen] = useState(false); //Valeur d'état pour ouvrir le dropdown
    return (
      <div className={ "dropdown" + ( isOpen ? 'open' : '' ) }>
      <div className="dropdown_title" alt="Titre de la partie"> {props.title}
          <img src={vector} alt="chevron-up" className={isOpen ? 'dropdown_icon' : 'up' } onClick={ () => setOpen(!isOpen )} />
      </div>

      {isOpen && <div className="dropdown_text">{props.text}</div>}
      </div>
    )
};
  
  export default Dropdown;