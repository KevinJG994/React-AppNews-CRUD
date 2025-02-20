import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <div className="logo-container">
        <Link to="/">
          <img src="./assets/KevTech.png" alt="KevTech-logo" title="Go home"/>
        </Link>
      </div>

      <div className="menu-container">
        <Link to="/addForm">
          <i className="bi bi-plus-circle-fill" title="Add New"></i>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;