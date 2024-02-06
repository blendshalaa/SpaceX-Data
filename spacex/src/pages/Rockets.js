import { useEffect, useState } from 'react'
import rocketServices from '../services/rocketServices'

function Rockets() {
  const [rocketData, setRocketData] = useState([])

  const fetchRockets = async () => {
    try {
      const response = await rocketServices.fetchRockets()
      setRocketData(response.data)
      console.log(response.data)


    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    fetchRockets()
  }, [])
  return (
    <div>Rockets
      {rocketData.map((item) => (
        <h1>Rocket name: {item.rocket_name}</h1>
      ))}
    </div>
  )
}

export default Rockets