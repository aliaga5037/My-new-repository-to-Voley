// Profile.js
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./profile.css"; // Подключаем стили

Modal.setAppElement("#root");
const Profile = ({ isAuthenticated, setIsAuthenticated }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    height: "",
    gender: "",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserData({
        username: parsedUser.username || "",
        height: parsedUser.height || "",
        gender: parsedUser.gender || "",
      });
    }

    // ... (остальной код)
  }, [setIsAuthenticated]);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  return (
    <div>
      {isAuthenticated && (
        <div>
          <button onClick={openModal}>Open Profile</button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Profile Modal"
            className="modal" // Добавьте класс для стилизации модального окна
            overlayClassName="modal-overlay" // Добавьте класс для стилизации подложки
          >
            <span className="modal-close" onClick={closeModal}>
              &times;
            </span>
            <div className="modal-user-text">
              <h2>Your Profile</h2>
              <p>Username: {userData.username}</p>

              <p>Height: {userData.height}</p>
              <p>Gender: {userData.gender}</p>
              <button onClick={closeModal}>Close Profile</button>
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Profile;
