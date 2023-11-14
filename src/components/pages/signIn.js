import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./SignIn.css";

const SignIn = ({ isAuthenticated, setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    // Проведите аутентификацию пользователя (например, отправкой запроса на сервер)

    // После успешной аутентификации
    setIsAuthenticated(true);

    // Сохраните информацию об аутентификации в localStorage
    localStorage.setItem("isAuthenticated", "true");

    // Перенаправляем пользователя на страницу событий
    navigate("/events");
  };

  // Если пользователь уже аутентифицирован, не показываем форму входа
  if (isAuthenticated) {
    return null;
  }

  return (
    <div className="signIn-container">
      <h2>Sign In</h2>
      <form className="signIn-form" onSubmit={handleSignIn}>
        <label className="signIn-label">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="signIn-input"
          />
        </label>
        <label className="signIn-label">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signIn-input"
          />
        </label>
        <button type="submit" className="signIn-button">
          Sign In
        </button>
      </form>
      <Link to="/signup" className="signUp-button">
        Sign Up
      </Link>
    </div>
  );
};

export default SignIn;
