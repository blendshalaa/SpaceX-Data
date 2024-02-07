import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="navbar">
      <li>
        <NavLink to="/" activeClassName="active">
          Rockets
        </NavLink>
      </li>
      <li>
        <NavLink to="/dragons" activeClassName="active">
          Dragons
        </NavLink>
      </li>
      <li>
        <NavLink to="/missions" activeClassName="active">
          Missions
        </NavLink>
      </li>
      <li>
        <NavLink to="/my-profile" activeClassName="active">
          My Profile
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
