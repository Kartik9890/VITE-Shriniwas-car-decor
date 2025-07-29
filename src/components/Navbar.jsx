// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
//import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Shriniwas Car Decor" className="logo" />
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
