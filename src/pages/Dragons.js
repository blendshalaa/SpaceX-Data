// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setDragons,
//   setReserveDragon,
//   setCancelDragonReservation,
// } from "../redux/slices/dragonsSlice";
// import dragonServices from "../services/dragonsServices";
// import DragonCard from "../components/DragonCard";

function Dragons() {
  // const dragons = useSelector((state) => state.dragons);
  // const dispatch = useDispatch();

  // const fetchDragons = async () => {
  //   try {
  //     const response = await dragonServices.fetchDragons();
  //     dispatch(setDragons(response.data));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchDragons();
  // }, []);

  // const onClickDragonCard = (item) => {
  //   if (item.reserved) {
  //     dispatch(setCancelDragonReservation({ id: item.id }));
  //   } else {
  //     dispatch(setReserveDragon({ id: item.id }));
  //   }
  // };

  return (
    <div className="dragons-container">
      <h1 className="dragons-title">Dragons</h1>
      {/* 
      <div className="dragon-list">
        {dragons.map((item, index) => (
          <DragonCard
            item={item}
            key={index}
            onClickButton={onClickDragonCard}
          />
        ))}
      </div> */}
    </div>
  );
}

export default Dragons;
