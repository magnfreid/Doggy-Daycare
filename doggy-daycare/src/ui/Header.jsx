import { Link } from "react-router";
import logo from "../assets/logo.jpg";
import "./Header.css";

function Header() {
  return (
    <header>
      <h1>Doggy Daycare</h1>
      <nav>
        <Link to={"/"}>Start</Link>
        <Link to={"/active"}>Aktiva</Link>
        <Link to={"/registry"}>Register</Link>
      </nav>
    </header>
  );
}

export default Header;
