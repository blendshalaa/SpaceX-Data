import { useSelector } from "react-redux";
import "../styles/myprofile.css";
import { useEffect } from "react";
import { fetchMission } from "../services/missionsServices";
import { fetchDragons } from "../services/dragonsServices";

const UniqueProfile = () => {
  const rockets = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.missions.missions);
  const dragons = useSelector((state) => state.dragons);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  useEffect(() => {
    fetchMission();
  }, []);

  useEffect(() => {
    fetchDragons();
  }, []);

  const joinedMissions = missions.filter((mission) => mission.reserved);

  return (
    <div className="unique-profile-container">
      <div className="unique-box unique-item">
        <div className="unique-box-top unique-item"></div>
        <div className="unique-box-middle unique-item">
          <div className="unique-box-content unique-item">
            <h2 className="unique-heading unique-item">YOUR RESERVED ROCKETS 🚀</h2>
            <div className="unique-rocket-container unique-item">
              {reservedRockets.length !== 0 ? (
                reservedRockets.map((rocket) => (
                  <div className="unique-rocket unique-item" key={rocket.id}>
                    {rocket.rocket_name}
                  </div>
                ))
              ) : (
                <p className="unique-no-rockets unique-item"> No rockets reserved!</p>
              )}
            </div>
          </div>
        </div>
        <div className="unique-box-bottom unique-item"></div>
      </div>

      <div className="missions unique-box unique-item">
        <div className="unique-box-top unique-item"></div>
        <div className="unique-box-middle unique-item">
          <div className="unique-box-content unique-item">
            <h2 className="unique-heading unique-item">JOINED MISSIONS 🎯</h2>
            <div className="unique-rocket-container unique-item">
              {joinedMissions.length !== 0 ? (
                joinedMissions.map((mission) => (
                  <div className="unique-rocket mission-card unique-item" key={mission.mission_id}>
                    <h3>{mission.mission_name}</h3>
                  </div>
                ))
              ) : (
                <p className="unique-no-rockets unique-item"> No missions joined!</p>
              )}
            </div>
          </div>
        </div>
        <div className="unique-box-bottom unique-item"></div>
      </div>

      <div className="dragons unique-box unique-item">
        <div className="unique-box-top unique-item"></div>
        <div className="unique-box-middle unique-item">
          <div className="unique-box-content unique-item">
            <h2 className="unique-heading unique-item">YOUR DRAGONS 🐉</h2>
            <div className="unique-dragon-container unique-item">
              {dragons.length !== 0 ? (
                dragons.map((dragon) => (
                  <div className="unique-dragon unique-item" key={dragon.id}>
                    {dragon.name}
                  </div>
                ))
              ) : (
                <p className="unique-no-dragons unique-item"> No dragons reserved!</p>
              )}
            </div>
          </div>
        </div>
        <div className="unique-box-bottom unique-item"></div>
      </div>
    </div>
  );
};

export default UniqueProfile;
