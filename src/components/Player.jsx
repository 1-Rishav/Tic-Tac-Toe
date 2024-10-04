import React, { useState } from "react";

function Player({ initialName, symbol,isActive }) {
  const [isEditing, setIsEditing] = useState(false);
const [playerName , setPlayerName] = useState(initialName)
  const handleClick = (e) => {
    e.preventDefault();
    setIsEditing(editing=>!editing);
  };
  const handleChange = (e)=>{
    e.preventDefault();
    setPlayerName(e.target.value);
  }
  return (
    <li className={isActive ? 'active': undefined}>
      <span className="player">
        {isEditing ? (
          <input type="text" onChange={handleChange} value={playerName}/>
        ) : (
          <span className="player-name" >{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing?"Save":"Edit"}</button>
    </li>
  );
}

export default Player;
