import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import "./header.css";

const Header = () => {
  return (
    <nav className="nav-div">
      <div className="ham-head">
        <GiHamburgerMenu color="#ffffff" size={20} />
        <h1 className="nav-head">IndigoLearn</h1>
      </div>
      <ul className="nav-list">
        <li className="nav-item">BUY COURSES</li>
        <li className="nav-item">PROGRAMS</li>
        <li className="nav-item">SCHOLARSHIPS</li>
        <li className="nav-item">FREE RESOURCES</li>
      </ul>
      <button className="nav-btn">
        <CgProfile color="#31307E" size={20} /> Log In/Sign Up
      </button>
    </nav>
  );
};

export default Header;
