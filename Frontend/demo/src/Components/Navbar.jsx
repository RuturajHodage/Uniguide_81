import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../CSS/Navbar.css';
import uniguideLogo from '../Images/uniguide.jpg';

const Navbar = (props) => {
  const isEliIgnored = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState(sessionStorage['userName']);
  // if (isLoggedIn) {
  //   setName(sessionStorage['userName'])
  // }

  const handleLogout = () => {
    sessionStorage.clear();
    // Perform logout logic (clear authentication)
    setIsLoggedIn(false);
  };
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="website-name">Uniguide</span>
        <img src={uniguideLogo} alt="Uniguide Logo" className="logo" />
      </div>
      <ul className="nav-list">
      <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/university">Universities</Link></li>
        <li><Link to="/college">Colleges</Link></li>
        <li><Link to="/stream">Streams</Link></li>
        <li><Link to="/test">Test</Link></li>
        <li><Link to="/predictor">College Predictor</Link></li>
        <li><Link to="/recruitlist">Recruitment</Link></li>
        {isLoggedIn ? <b>Hello { sessionStorage['userName']  }</b>:""}
        <li className="dropdown">
          <span className="account-link">Account</span>
          <div className="dropdown-content">
            {!isLoggedIn? (
              <Link to="/login" onClick={handleLogin}>Login</Link>
            ) : (
              <>
                <Link to="/profile">
                  Profile <FontAwesomeIcon icon={faUser} className="profile-icon" />
                </Link>
                <Link to="/appfeedback">Feedback</Link>
                <Link to="/signout" onClick={handleLogout}>
                  Sign Out
                </Link>
              </>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;