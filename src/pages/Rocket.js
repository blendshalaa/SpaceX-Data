import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import rocketServices from "../services/rocketServices";
import React from "react";
import {
  setCancelReservation,
  setReserveRocket,
  setRockets,
} from "../redux/slices/rocketSlice";
import RocketCard from "../components/RocketCard";
import "../styles/rockets.css";

const RocketPage = () => {
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
    if (rockets.length > 0) return;
    fetchRockets();
  }, []);

  const onClickRocketCard = (item) => {
    console.log("onClickRocketCard");
    console.log(item);
    if (item.reserved) {
      dispatch(setCancelReservation({ id: item.id }));
    } else {
      dispatch(setReserveRocket({ id: item.id }));
    }
  };

  return (
    <div>
      <div className="rockets-container">
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
    </div>
  );
};

export default RocketPage;
