import { useSelector } from "react-redux";
import "../styles/myprofile.css";
import { useEffect } from "react";
import { fetchMission } from "../services/missionsServices"; // Import the fetchMission function
// import "../styles/my-profile.css";

const UniqueProfile = () => {
  const rockets = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.missions.missions); // Add selector for missions
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  useEffect(() => {
    fetchMission(); // Fetch missions data when component mounts
  }, []);

  // Filter joined missions
  const joinedMissions = missions.filter((mission) => mission.reserved);

  return (
    <div className="unique-profile-container">
      <div className="unique-box">
        <div className="unique-box-top"></div>
        <div className="unique-box-middle">
          <div className="unique-box-content">
            <h2 className="unique-heading">YOUR RESERVED ROCKETS</h2>
            <div className="unique-rocket-container">
              {reservedRockets.length !== 0 ? (
                reservedRockets.map((rocket) => (
                  <div className="unique-rocket" key={rocket.id}>
                    {rocket.rocket_name}
                  </div>
                ))
              ) : (
                <p className="unique-no-rockets"> No rockets reserved!</p>
              )}
            </div>
          </div>
        </div>
        <div className="unique-box-bottom"></div>
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

export default UniqueProfile;
