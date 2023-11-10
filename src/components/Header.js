import React from "react";
import "../components/header.css";
import logoImg from "../../src/logo.svg";
import Event from "./pages/events";

const Header = () => {
  return (
    <div className="header" id="masthead">
      <div className="container">
        <div className="header_row">
          <div className="header__logo">
            <img src={logoImg}></img>
          </div>
          <nav className="header__nav">
            <ul>
              <li>
                <a href="#!" className="border-bottom">
                  Media
                </a>
              </li>
              <li>
                <a href="events.js" target="_blank" className="border-bottom">
                  Events
                </a>
              </li>
              <li>
                <a href="#!" className="border-bottom">
                  Ranks
                </a>
              </li>
            </ul>
          </nav>
          <div className="signin">
            <a href="#!" className="signin-bottom">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
