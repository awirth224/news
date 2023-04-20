import React from "react";
import "../CSS/Card.css";
import {NavLink} from'react-router-dom'

function Card({id, img, alt, title}) {
  return (
      <div className="card-container">
        <img src={img} alt={alt}/>
        <h2 className="title">{title}</h2>
        <button>Read More</button>
      </div>
  )
}

export default Card