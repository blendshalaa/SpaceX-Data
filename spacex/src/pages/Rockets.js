import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import rocketServices from "../services/rocketServices";
import React from "react";
import "../styles/rockets.css";

import {
  setCancelReservation,
  setReserveRocket,
  setRockets,
} from "../redux/slices/rocketsSlice";
import RocketCard from "../components/RocketCard";

function Rockets() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  const fetchRockets = async () => {
    try {
      const response = await rocketServices.fetchRockets();
      dispatch(setRockets(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRockets();
  }, []);

  const onClickRocketCard = (item) => {
    if (item.reserved) {
      dispatch(setCancelReservation({ id: item.id }));
    } else {
      dispatch(setReserveRocket({ id: item.id }));
    }
  };

  return (
    <div className="rockets-container">
      <nav className="navigation">
        <NavLink
          exact
          to="/rockets"
          className="nav-link"
          activeClassName="active-link"
        >
          Rockets
        </NavLink>
        <NavLink
          exact
          to="/missions"
          className="nav-link"
          activeClassName="active-link"
        >
          Missions
        </NavLink>
        <NavLink
          exact
          to="/dragons"
          className="nav-link"
          activeClassName="active-link"
        >
          Dragons
        </NavLink>
        <NavLink
          exact
          to="/profile"
          className="nav-link"
          activeClassName="active-link"
        >
          My Profile
        </NavLink>
      </nav>

      <h1 className="rockets-title">Rockets</h1>

      <div className="rocket-list">
        {rockets.map((item, index) => (
          <RocketCard
            item={item}
            key={index}
            onClickButton={onClickRocketCard}
          />
        ))}
      </div>
    </div>
  );
}

export default Rockets;