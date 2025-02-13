import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="logo-container">
        <Link to="/">
          <img src="./src/assets/KevTech.png" alt="KevTech-logo" />
        </Link>
      </div>

      <div className="menu-container">
        <i className="bi bi-cast"></i>
      </div>
    </nav>
  )
}

export default Navbar;