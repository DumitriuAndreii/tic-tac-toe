import React, { useState } from "react";

export const Player = ({ initialName, symbol }) => {
  const [playerName, setPlayerName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false);
  const handleClick = () => {
    setIsEditing(editing => !editing);
  };

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  }

  return (
    <li>
      <span className="player ">
        {isEditing ? (
          <input autoFocus value={playerName} onChange={handleChange}/>
        ) : (
          <span className="player-name">{playerName}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};
