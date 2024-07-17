

import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaEdit, FaUserCircle, FaCog, FaSignOutAlt } from 'react-icons/fa'; // Example icons, you can use any icons you prefer

const Sidebar = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{ width: "180px" }}>
      <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4">Sidebar</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" onClick={() => setSelectedTab("Home")}>
          <Link to="/" className={`nav-link text-white ${selectedTab === 'Home' && "active"}`} aria-current="page">
            <FaHome className="me-2" />
            Home
          </Link>
        </li>
        <li className="nav-item" onClick={() => setSelectedTab("Create Post")}>
          <Link to="/create-post" className={`nav-link text-white ${selectedTab === 'Create Post' && "active"}`}>
            <FaEdit className="me-2" />
            Create Post
          </Link>
        </li>
        {/* Example of expandable section */}
        <li className="nav-item">
          <a className="nav-link text-white" data-bs-toggle="collapse" href="#userSection" role="button" aria-expanded="false" aria-controls="userSection">
            <FaUserCircle className="me-2" />
            User Section
          </a>
          <div className="collapse" id="userSection">
            <ul className="nav flex-column">
              <li className="nav-item"><Link to="/profile" className="nav-link text-white">Profile</Link></li>
              <li className="nav-item"><Link to="/settings" className="nav-link text-white">Settings</Link></li>
              <li className="nav-item"><Link to="/logout" className="nav-link text-white">Logout</Link></li>
            </ul>
          </div>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <FaUserCircle className="rounded-circle me-2" style={{ width: '32px', height: '32px' }} />
          <strong>Username</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li><Link className="dropdown-item" to="#">New Project...</Link></li>
          <li><Link className="dropdown-item" to="#">Settings</Link></li>
          <li><Link className="dropdown-item" to="#">Profile</Link></li>
          <li><hr className="dropdown-divider" /></li>
          <li><Link className="dropdown-item" to="#">Sign Out</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
