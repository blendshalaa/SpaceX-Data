import React, { useState } from "react";
import "../styles/dragons.css";

export default function DragonCard({ item, onClickButton }) {
  const [reserved, setReserved] = useState(false);


  const toggleReservation = () => {
    setReserved(!reserved);
    onClickButton(item);
  };

  return (
    <div key={item.id} className="dragon-item">
      <h2 className="dragon-name">{item.name}</h2>
      {item.type && <p>Type: {item.type}</p>}
      {item.flickr_images.length > 0 && (
        <img
          src={item.flickr_images[0]}
          alt={item.name}
          className="dragon-image"
        />
      )}

      {item.description && (
        <div className="dragon-description-container">
          <p className="dragon-description">{item.description}</p>
        </div>
      )}

      <div className="reservation-button-container">
        {reserved && <p className="reserved-paragraph">🚀 R E S E R V E D 🚀</p>}
        <button className="reservation-button" onClick={toggleReservation}>
          {reserved ? "Cancel Dragon" : "Reserve Dragon"}
        </button>
      </div>
    </div>
  );
}
