import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Header from "./components/Header";
import Promo from "./components/promo";
import Footer from "./components/footer";
import Events from "./components/pages/events";
import SignIn from "../src/components/pages/signIn";
import SignUp from "../src/components/pages/SignUp";
import Profile from "../src/components/pages/Profile";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header isAuthenticated={isAuthenticated} />
        <Routes>
          <Route
            path="/events"
            element={<Events isAuthenticated={isAuthenticated} />}
          />
          <Route
            path="/signin"
            element={<SignIn setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/signup"
            element={<SignUp setIsAuthenticated={setIsAuthenticated} />}
          />
          {/* Убедитесь, что передаете setIsAuthenticated в Profile */}
          <Route
            path="/profile"
            element={
              <Profile
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
