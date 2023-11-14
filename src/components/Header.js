// Header.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../../src/logo_3.svg";
import "../components/header.css";

const Header = ({ isAuthenticated, openProfile }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Добавьте здесь логику для выхода пользователя (если требуется)
    // После успешного выхода установите isAuthenticated в false
    // и перенаправьте пользователя на страницу входа
    navigate("/signin");
  };

  return (
    <div className="header" id="masthead">
      <div className="container">
        <div className="header_row">
          <div className="header__logo">
            <img src={logoImg} alt="Logo" />
          </div>
          <nav className="header__nav">
            <ul>
              <li>
                <Link to="/promo">Promo</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <a href="#!">Ranks</a>
              </li>
              {isAuthenticated && (
                <React.Fragment>
                  <li>
                    <Link to="/profile" onClick={openProfile}>
                      Profile
                    </Link>
                  </li>
                </React.Fragment>
              )}
            </ul>
          </nav>
          {!isAuthenticated && (
            <div className="signin">
              <Link to="/signin" className="signin-bottom">
                Sign in
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
