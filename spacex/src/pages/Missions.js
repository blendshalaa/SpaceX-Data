import { useEffect, useState } from 'react';
import missionsServices from '../services/missionsServices';
import '../styles/missions.css';

function Missions() {
  const [missionsData, setMissionData] = useState([]);

  const fetchMission = async () => {
    try {
      const response = await missionsServices.fetchMission();
      setMissionData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchMission();
  }, []);

  return (
    <div className="missions-container">
      <h1 className="mission-title">Missions</h1>
      <table className="missions-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Join/Leave</th>
            <th>Member</th>
          </tr>
        </thead>
        <tbody>
          {missionsData.map((item) => (
            <tr key={item.mission_id}>
              <td>{item.mission_id}</td>
              <td>{item.mission_name}</td>
              <td>{item.description}</td>
              <td>
                <button>Join/Leave</button>
              </td>
              <td>{item.member}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Missions;
