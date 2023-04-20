import React from "react";
import "../CSS/Card.css";
import {Link} from'react-router-dom'

function Card({id, img, alt, title}) {
  return (
      <div className="card-container">
        <img src={img} alt={alt}/>
        <h2 className="title">{title}</h2>
        <Link to={id}><button>Read More</button></Link>
      </div>
  )
}

export default Card