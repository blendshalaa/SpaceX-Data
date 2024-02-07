// DragonCard.js
import React, { useState } from 'react';
import '../styles/Dragons.css'; // Adjust the path accordingly

export default function DragonCard({ item, onClickButton }) {
  const [reserved, setReserved] = useState(item.reserved);

  const toggleReservation = () => {
    setReserved(!reserved);
    onClickButton(item); // Pass the clicked item to the parent component
  };

  return (
    <div key={item.id} className="dragon-item">
      <h2 className="dragon-name">{item.name}</h2>
      {item.type && <p>Type: {item.type}</p>}
      {item.flickr_images.length > 0 && (
        <img src={item.flickr_images[0]} alt={item.name} className='dragon-image' />
      )}

      {/* Conditional rendering based on reserved status */}
      <div className="dragon-description-container">
        <p className="dragon-description">{/* Include Dragon description here if available */}</p>
      </div>

      <div className="reservation-button-container">
        {reserved && <p className="reserved-text">R E S E R V E D</p>}
        <button className="reservation-button" onClick={toggleReservation}>
          {reserved ? "Cancel Dragon" : "Reserve Dragon"}
        </button>
      </div>
    </div>
  );
}
