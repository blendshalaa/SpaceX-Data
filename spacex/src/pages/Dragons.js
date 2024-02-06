import { useEffect, useState } from 'react'
import dragonsServices from '../services/dragonsServices'
import '../styles/rockets.css'

function Dragons() {
  const [dragonData, setDragonData] = useState([])

  const fetchDragons = async () => {
    try {
      const response = await dragonsServices.fetchDragons()
      setDragonData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchDragons()
  }, [])

  return (
    <div>
      <h1>Dragons</h1>
      {dragonData.map((item) => (
        <div key={item.id}>
          <p>ID: {item.id}</p>
          <h2>Drragon name: {item.name}</h2>
          <p>Type {item.description}</p>
          <img src={item.flickr_images} alt={item.name} className='rocket-image' />

        </div>
      ))}
    </div>
  )
}

export default Dragons
