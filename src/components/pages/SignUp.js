import React, { useState } from "react";
import { useNavigate as useNavigateDynamic } from "react-router-dom";

const SignUp = ({ setIsAuthenticated }) => {
  const navigate = useNavigateDynamic();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    gender: "",
    height: "",
    username: "", // Добавлено поле Username
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (
      formData.email !== undefined &&
      formData.password !== undefined &&
      formData.firstName !== undefined &&
      formData.gender !== undefined &&
      formData.height !== undefined &&
      formData.username !== undefined
    ) {
      // Here you can add logic to handle user registration

      // Save user data (in this case, in localStorage)
      localStorage.setItem("user", JSON.stringify(formData));

      // Set isAuthenticated to true
      setIsAuthenticated(true);

      // Redirect the user to the "events" page
      navigate("/events");
    } else {
      // Display an error message if not all required fields are filled
      alert("Please fill in all required fields.");
    }
  };

  const formFields = ["Email", "Password", "First Name", "Username"]; // Добавлено поле Username

  return (
    <div className="signIn-container">
      <h2>Sign Up</h2>
      <form className="signIn-form" onSubmit={handleSignUp}>
        {formFields.map((field) => (
          <label key={field} className="signIn-label">
            {field}:
            <input
              type={field.toLowerCase() === "password" ? "password" : "text"}
              name={field.toLowerCase().replace(/\s/g, "")}
              value={formData[field.toLowerCase().replace(/\s/g, "")] || ""}
              onChange={handleChange}
              className="signIn-input"
              required
            />
          </label>
        ))}
        <label className="signIn-label">
          Gender:
          <select
            name="gender"
            value={formData.gender || ""}
            onChange={handleChange}
            className="signIn-input"
            required
          >
            <option value="">Select Gender</option>
            <option key="male" value="male">
              Male
            </option>
            <option key="female" value="female">
              Female
            </option>
          </select>
        </label>
        <label className="signIn-label">
          Height:
          <input
            type="number"
            name="height"
            value={formData.height || ""}
            onChange={handleChange}
            className="signIn-input"
            required
          />
        </label>
        <button type="submit" className="signIn-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
