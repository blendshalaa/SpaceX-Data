import { useSelector } from "react-redux";
import "../styles/myprofile.css";

const UniqueProfile = () => {
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

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
    </div>
  );
};

export default UniqueProfile;
