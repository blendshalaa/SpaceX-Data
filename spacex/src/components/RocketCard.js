import { useState } from 'react';
import '../styles/RocketCard.css'

export default function RocketCard({ item }) {
    const [reserved, setReserved] = useState(item.reserved);

    const toggleReservation = () => {
        setReserved(!reserved);
    };

    return (
        <div key={item.rocket_id} className="rocket-item">
            <h2 className="rocket-name">{item.rocket_name}</h2>
            <div className="rocket-description-container">
                <p className="rocket-description">Description: {item.description}</p>
            </div>
            <div className='image-container'>
                <img src={item.flickr_images} alt={item.rocket_name} className="rocket-image" />
            </div>

            <div className="reservation-button-container">

            </div>
            {reserved && <p className="reserved-text">R E S E R V E D</p>}
            <button className="reservation-button" onClick={toggleReservation}>
                {reserved ? "Cancel Rocket" : "Reserve Rocket"}
            </button>
        </div>

    );
}
