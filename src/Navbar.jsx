import { Link } from "react-router-dom";
import "./styles.css";

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <div className="nav-left">
          <img
            src="/icon/icon_fran.png"
            alt="Francesco Romano's Avatar"
            className="avatar"
          />
          <h3>Francesco Romano</h3>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/Projects">Proyectos</Link>
          <Link to="/Contact">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
