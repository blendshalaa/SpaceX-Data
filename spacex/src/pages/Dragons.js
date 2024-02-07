import { useEffect} from 'react'



import '../styles/Rockets.css'
// Dragons.js

import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setDragons, setReserveDragon, setCancelDragonReservation } from '../redux/slices/dragonsSlice';
import dragonServices from '../services/dragonsServices.js';
import DragonCard from '../components/DragonCard';

function Dragons() {
  const dragons = useSelector((state) => state.dragons);
  const dispatch = useDispatch();

  const fetchDragons = async () => {
    try {
      const response = await dragonServices.fetchDragons();
      dispatch(setDragons(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDragons();
  }, []);

  const onClickDragonCard = (item) => {
    if (item.reserved) {
      dispatch(setCancelDragonReservation({ id: item.id }));
    } else {
      dispatch(setReserveDragon({ id: item.id }));
    }
  };

  return (
    <div className="dragons-container">
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

      <h1 className="dragons-title">Dragons</h1>

      <div className="dragon-list">
        {dragons.map((item, index) => (
          <DragonCard
            item={item}
            key={index}
            onClickButton={onClickDragonCard}
          />
        ))}
      </div>
    </div>
  );
}

export default Dragons;
