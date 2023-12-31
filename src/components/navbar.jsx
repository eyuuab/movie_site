import React from 'react';
import logo from '../logo.png';
import search from '../search.png';
import notification from '../notification.png';
import user from '../user.png';

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <img className="logo" src={logo} alt="Logo" />
        <ul className="links">
          <li className="link">New</li>
          <li className="link">Movies</li>
          <li className="link">Cartoons</li>
          <li className="link">TVShows</li>
          <li className="link">Documentary</li>
        </ul>

        <div className="search">
          <input placeholder="search" type="text" className="searchinput" />
          <button className="searchButton">
            <img className="searchIcon" src={search} alt="Search Icon" />
          </button>
          
        </div>

        <div className="more">
          <button className="iconButton">
            <img className="icon" src={notification} alt="Notification Icon" />
          </button>
          <button className="iconButton">
            <img className="icon" src={user} alt="User Icon" />
          </button></div>
      </nav>
    </div>
  );
};

export default Navbar;