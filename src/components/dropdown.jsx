import React, {useState} from 'react'
import "../styles/dropdown.css"


const Dropdown = () => {
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(!open);
    };
  
    return (
      <div className="dropdown">
        <div className="dropdown_main">

        </div>
        <div className="dropdown_text">
          
        </div>
      </div>
    );
  };
  
  export default Dropdown;