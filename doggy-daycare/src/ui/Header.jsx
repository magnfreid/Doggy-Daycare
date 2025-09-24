import { Link, NavLink } from "react-router";
import logo from "../assets/logo.jpg";
import "./Header.css";

function Header() {
  return (
    <header>
      <h1>Beatas Hunddagis</h1>
      <nav>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Start
        </NavLink>
        <NavLink
          to={"/active"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Gäster
        </NavLink>
        <NavLink
          to={"/registry"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Register
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
