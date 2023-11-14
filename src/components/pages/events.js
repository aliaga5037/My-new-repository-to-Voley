import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "../pages/events.css";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock } from "react-icons/fa";

Modal.setAppElement("#root");

// TODO: Create event logikasini ayir 
const Events = ({ isAuthenticated }) => {
  const [teams, setTeams] = useState([]);
  const [joinedTeams, setJoinedTeams] = useState([]);
  const [joinedPlayersCount, setJoinedPlayersCount] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [nameInputValue, nameSetInputValue] = useState("");
  const [countOfInputValue, countOfSetInputValue] = useState("");
  const [locationInputValue, setLocationInputValue] = useState("");
  const [dateInputValue, setDateInputValue] = useState("");
  const [timeInputValue, setTimeInputValue] = useState("");
  const [playerNames, setPlayerNames] = useState(Array(18).fill(""));

  useEffect(() => {
    const events = JSON.parse(localStorage.getItem("events")) || [];
    setTeams(events);
  }, []);

  const handleCreateGame = (e) => {
    e.preventDefault();
    if (joinedTeams.length < 2) {
      setShowModal(true);
    }
  };

  const handleJoin = (index) => {
    // TODO: localstorage-dan eventi tap player listi update ele, eventleri update ele
    const selectedTeam = teams[index];

    if (!joinedTeams.includes(selectedTeam.name)) {
      setJoinedTeams([...joinedTeams, selectedTeam.name]);
      setJoinedPlayersCount((prevCount) => ({
        ...prevCount,
        [selectedTeam.name]: (prevCount[selectedTeam.name] || 0) + 1,
      }));

      const newPlayerNames = [...playerNames];
      newPlayerNames[index] =
        "Player " + (joinedPlayersCount[selectedTeam.name] || 0);
      setPlayerNames(newPlayerNames);
    } else {
      alert("You have already joined this team.");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowPlayers = (index) => {
    const selectedTeam = teams[index];
    const players = playerNames
      .filter((name, i) => i < joinedPlayersCount[selectedTeam.name])
      .map((name) => name || "Unnamed Player");

      // TODO: alertin yerine modal duzelt
    alert(`Players in ${selectedTeam.name}: ${players.join(", ")}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (joinedTeams.length < 2) {
      if (
        nameInputValue.trim() &&
        countOfInputValue.trim() &&
        locationInputValue.trim() &&
        dateInputValue.trim() &&
        timeInputValue.trim()
      ) {
        const newTeam = {
          name: nameInputValue,
          countOfPlayers: countOfInputValue,
          location: locationInputValue,
          date: dateInputValue,
          time: timeInputValue,
        };

        setTeams([...teams, newTeam]);
        let events = JSON.parse(localStorage.getItem("events")) || [];
        if (!events.length) {
          localStorage.setItem("events", JSON.stringify([newTeam]));
        } else {
          localStorage.setItem("events", JSON.stringify([...events, newTeam]));
        }

        setShowModal(false);
      } else {
        alert("Please fill in all required fields.");
      }
    }
  };

  return (
    <div className="events-container">
      <section className="events-top-box">
        <form>
          {isAuthenticated && (
            <button
              id="hostGamebtn"
              className="hostGame-btn"
              onClick={handleCreateGame}
              disabled={joinedTeams.length >= 2}
            >
              Create Game
            </button>
          )}
        </form>
      </section>
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        contentLabel="Create Game Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <h3>Create Game</h3>
          <label>
            Group Name:
            <input
              type="text"
              value={nameInputValue}
              onChange={(e) => nameSetInputValue(e.target.value)}
            />
          </label>
          <label>
            Count Of:
            <input
              type="range"
              value={countOfInputValue}
              onChange={(e) => countOfSetInputValue(e.target.value)}
              max={18}
            />
            {countOfInputValue}
          </label>
          <label>
            <span>
              <FaMapMarkerAlt />
              Location:
            </span>
            <input
              type="text"
              value={locationInputValue}
              onChange={(e) => setLocationInputValue(e.target.value)}
            />
          </label>
          <label>
            <span>
              <FaCalendarAlt />
              Date:
            </span>
            <input
              type="date"
              value={dateInputValue}
              onChange={(e) => setDateInputValue(e.target.value)}
            />
          </label>
          <label>
            <span>
              <FaClock />
              Time:
            </span>
            <input
              type="time"
              value={timeInputValue}
              onChange={(e) => setTimeInputValue(e.target.value)}
            />
          </label>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </Modal>
      {teams.map((team, index) => (
        <main className="teams-box-top" key={index}>
          <div className="teams-box">
            <div className="teams-list">
              <h1 id="team-room-title">{team.name}</h1>
              <div className="team-room-text">
                <span onClick={() => handleShowPlayers(index)}>&#128100;</span>
                <p>
                  <FaMapMarkerAlt /> {team.location}
                </p>
                <p>
                  <FaCalendarAlt /> {team.date}
                </p>
                <p>
                  <FaClock /> {team.time}
                </p>
                <p>
                  Players: {joinedPlayersCount[team.name] || 0} /{" "}
                  {team.countOfPlayers}
                </p>
                <button
                  className="join-btn"
                  onClick={() => handleJoin(index)}
                  disabled={joinedTeams.includes(team.name)}
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </main>
      ))}
    </div>
  );
};

export default Events;
