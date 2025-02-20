import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <div className="logo-container">
        <Link to="/">
          <img src="./assets/KevNews.png" alt="KevNews-logo" title="Go home"/>
        </Link>
      </div>

      <div className="menu-container">
        <Link to="/addForm">
          <i className="bi bi-plus-circle-fill" title="Add Article"></i>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;