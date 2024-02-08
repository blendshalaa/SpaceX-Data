// components/DragonCard.js

import React, { useState } from 'react';
import '../styles/Dragons.css'; // Adjust the path accordingly


export default function DragonCard({ item }) {

  const [reserved, setReserved] = useState(item.reserved);

  const toggleReservation = () => {
    setReserved(!reserved);
   
  return (
    <div key={item.id} className="dragon-item">
      <h2 className="rocket-name">{item.rocket_name}</h2>
            <div className="rocket-description-container">
                <p className="rocket-description">Description: {item.description}</p>
            </div>
            <div className='image-container'>
                <img src={item.flickr_images} alt={item.rocket_name} className="rocket-image" />
            </div>


      <div className="reservation-button-container">
        {reserved && <p className="reserved-text">R E S E R V E D</p>}
        <button className="reservation-button" onClick={toggleReservation}>
          {reserved ? 'Cancel Dragon' : 'Reserve Dragon'}
        </button>
      </div>
    </div>
  );
}
}

