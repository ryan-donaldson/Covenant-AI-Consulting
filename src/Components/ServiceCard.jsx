import React from 'react';
import './ServiceCard.css';
import servicesData from '../data/servicesData';
function Service({ title, description, price, delivery, variant, onClick }) {
  return (
    <>
      <div className={`card__wrapper ${variant}__card `} onClick={onClick}>
       <h2 className="card__title">{title}</h2>
       <h3 className="card__description">{description}</h3>
       
       <div className="learn__more">
        <h2 className="card__learn--more">Learn more</h2>
       </div>
      </div>
    </>
  )
}



export default Service
