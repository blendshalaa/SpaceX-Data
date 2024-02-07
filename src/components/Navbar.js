import { NavLink } from "react-router-dom";
import '../styles/navlink.css'

const Navbar = () => {
  return (
    <ul className="navbar">
      <li>
        <NavLink to="/" activeClassName="active" className="nav-link">
          Rockets
        </NavLink>
      </li>
      <li>
        <NavLink to="/dragons" activeClassName="active" className="nav-link">
          Dragons
        </NavLink>
      </li>
      <li>
        <NavLink to="/missions" activeClassName="active" className="nav-link">
          Missions
        </NavLink>
      </li>
      <li>
        <NavLink to="/my-profile" activeClassName="active" className="nav-link">
          My Profile
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
