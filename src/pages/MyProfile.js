import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMission } from "../services/missionsServices"; // Import the fetchMission function
import "../styles/my-profile.css";

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.missions.missions); // Add selector for missions
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  useEffect(() => {
    fetchMission(); // Fetch missions data when component mounts
  }, []);

  // Filter joined missions
  const joinedMissions = missions.filter((mission) => mission.reserved);

  return (
    <div className="my-profile">
      <div className="stats">
        <div className="item-stats grid-item">
          <h2>Reserved Rockets 🚀</h2>
          {reservedRockets.length !== 0 ? (
            reservedRockets.map((rocket) => (
              <li key={rocket.id}>{rocket.rocket_name}</li>
            ))
          ) : (
            <p>No rockets reserved!</p>
          )}
        </div>
      </div>
      <div className="missions">
        <h2>Joined Missions 🚀</h2>
        {joinedMissions.map((mission) => (
          <div key={mission.mission_id} className="mission-card">
            <h3>{mission.mission_name}</h3>
            <p>{mission.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProfile;
