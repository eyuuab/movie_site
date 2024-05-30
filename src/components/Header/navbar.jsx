import React from 'react';
import logo from './logo.png';
import search from './search.png';
import notification from './notification.png';
import user from './user.png';
import './navbar.css';
import { useDispatch } from 'react-redux';
import { setCategory } from '../../redux/features/category/catergorySlice';

const Navbar = ({ updateChoies }) => {
  const dispatch = useDispatch();
  const handleCategoryChange = (category) => {
    dispatch(setCategory(category));
  }

  return (
    <div className="app">
      <div className="container">
        <nav className="navbar">
          <img className="logo" src={logo} alt="Logo" />
          <ul className="links">
            <li className="link" onClick={() => handleCategoryChange('new')}>New</li>
            <li className="link" onClick={() => handleCategoryChange('movie/now_playing')}>Movies</li>
            <li className="link" onClick={() => handleCategoryChange('cartoons')}>Cartoons</li>
            <li className="link" onClick={() => handleCategoryChange('discover/tv')}>TVShows</li>
            <li className="link" onClick={() => handleCategoryChange('documentary')}>Documentary</li>
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
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;