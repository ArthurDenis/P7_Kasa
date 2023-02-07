import React, {useState} from 'react'
import "../styles/dropdown.css"


const Dropdown = () => {
    const [open, setOpen] = useState(false);

    return (
      <div className={ "dropdown" + ( open ? 'open' : '' ) }>
      <div className="dropdown_title" >
          <img src="" alt="chevron-up" className={open ? 'dropdown_icon' : 'up' } onClick={ () => setOpen(!open )} />
      </div>

      {open &&
          <div className="dropdown_text"></div>
      }
      </div>
    );
  };
  
  export default Dropdown;