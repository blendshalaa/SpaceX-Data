import { useEffect, useState } from 'react'
import missionsServices from '../services/missionsServices'
import '../styles/Missions.css'

function Missions() {
  const [missionsData, setMissionData] = useState([])

  const fetchMission = async () => {
    try {
      const response = await missionsServices.fetchMission()
      setMissionData(response.data)
    } catch (error) {

    }
  }

  useEffect(() => {
    fetchMission()
  }, [])

  return (
    <div>
      <h1>Mission</h1>
      {missionsData.map((item) => (
        <div key={item.mission_id}>
          <p>ID: {item.mission_id}</p>
          <h2>Mission name: {item.mission_name}</h2>
          <p>Description: {item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Missions;