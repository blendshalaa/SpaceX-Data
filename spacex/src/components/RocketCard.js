import React from 'react'

export default function RocketCard({ item, onClickButton }) {

    const onClick = () => {
        onClickButton(item)
    }

    return (
        <div key={item.rocket_id} className="rocket-item">
            <h2 className="rocket-name"> {item.rocket_name}</h2>
            <div class="rocket-description-container">
                <p class="rocket-description">Description: {item.description}</p>
            </div>
            <img src={item.flickr_images} alt={item.rocket_name} className='rocket-image' />
            <p>{item.reserved ? "Reserved" : "Not Reserved"}</p>
            <button onClick={onClick}>Reserve</button>
        </div>
    )
}
