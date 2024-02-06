import { useEffect, useState } from 'react'
import rocketServices from '../services/rocketServices'
import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/rockets.css'

function Rockets() {
  const [rocketData, setRocketData] = useState([])

  const fetchRockets = async () => {
    try {
      const response = await rocketServices.fetchRockets()
      setRocketData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchRockets()
  }, [])

  return (
    <div className="rockets-container">
      <nav className="navigation">
        <NavLink exact to="/rockets" className='nav-link' activeClassName='active-link'>Rockets</NavLink>
        <NavLink exact to="/missions" className='nav-link' activeClassName='active-link'>Missions</NavLink>
        <NavLink exact to="/dragons" className='nav-link' activeClassName='active-link'>Dragons</NavLink>
        <NavLink exact to="/profile" className='nav-link' activeClassName='active-link'>My Profile</NavLink>
      </nav>

      <h1 className="rockets-title">Rockets</h1>

      <div className="rocket-list">
        {rocketData.map((item) => (
          <div key={item.rocket_id} className="rocket-item">
            {/* <p className="rocket-id">ID: {item.rocket_id}</p> */}
            <h2 className="rocket-name"> {item.rocket_name}</h2>
            <div class="rocket-description-container">
              <p class="rocket-description">Description: {item.description}</p>
            </div>
            <img src={item.flickr_images} alt={item.rocket_name} className='rocket-image' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Rockets
