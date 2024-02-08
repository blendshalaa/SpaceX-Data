import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDragons } from '../services/dragonsServices';
import {
  setDragons,
  reserveDragon,
  cancelDragonReservation,
} from '../redux/slices/dragonsSlice';

function Dragons() {
  const dispatch = useDispatch();
  const dragonsData = useSelector((state) => state.dragons);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchDragons();
        dispatch(setDragons(response));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleDragonAction = (dragonId, isReserved) => {
    if (isReserved) {
      dispatch(reserveDragon({ id: dragonId }));
    } else {
      dispatch(cancelDragonReservation({ id: dragonId }));
    }
  };

  if (!Array.isArray(dragonsData) || dragonsData.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Dragons</h1>
      {dragonsData.map((item) => (
        <div key={item.id}>
          <p>ID: {item.id}</p>
          <h2>Dragon name: {item.name}</h2>
          {item.type && <p>Type: {item.type}</p>}
          {item.flickr_images.length > 0 && (
            <img src={item.flickr_images[0]} alt={item.name} className="dragon-image" />
          )}

          {item.reserved ? (
            <div>
              <p className="reserved-text">R E S E R V E D</p>
              <button
                className="reservation-button"
                onClick={() => handleDragonAction(item.id, false)}
              >
                Cancel Dragon
              </button>
            </div>
          ) : (
            <button
              className="reservation-button"
              onClick={() => handleDragonAction(item.id, true)}
            >
              Reserve Dragon
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Dragons;
