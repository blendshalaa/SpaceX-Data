import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissionsData, joinMission, leaveMission } from '../components/missionsActions';
import { selectMissions } from '../redux/slices/missionsSlice';
import '../styles/missions.css';
import MissionCard from '../components/MissionCard';

function Missions() {
  const dispatch = useDispatch();
  const missionsData = useSelector(selectMissions);

  useEffect(() => {
    dispatch(fetchMissionsData());
  }, [dispatch]);

  const handleJoinLeave = (missionId, isReserved) => {
    if (isReserved) {
      dispatch(leaveMission(missionId));
    } else {
      dispatch(joinMission(missionId));
    }
  };

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
                <button onClick={() => handleJoinLeave(item.mission_id, item.reserved)}>
                  {item.reserved ? 'Leave' : 'Join'}
                </button>
              </td>
              <td>{item.reserved ? 'Active Member' : 'Not a Member'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Missions;
