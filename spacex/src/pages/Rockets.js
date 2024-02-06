import { useEffect, useState } from 'react'
import rocketServices from '../services/rocketServices'
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
    <div>
      <h1>Rockets</h1>
      {rocketData.map((item) => (
        <div key={item.rocket_id}>
          <p>ID: {item.rocket_id}</p>
          <h2>Rocket name: {item.rocket_name}</h2>
          <p>Description: {item.description}</p>
          <img src={item.flickr_images} alt={item.rocket_name} className='rocket-image' />

        </div>
      ))}
    </div>
  )
}

export default Rockets
