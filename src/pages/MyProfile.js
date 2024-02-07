import { useSelector } from "react-redux";
import "../styles/my-profile.css";

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

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
    </div>
  );
};

export default MyProfile;
