import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);


    function handleEditClick() {
        setIsEditing((editting) =>!editting);
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    let playerNameUI= <span className="player-name">{playerName}</span>;
2
    if (isEditing){
        console.log("edit mode");
        playerNameUI = <input type="qtext" required defaultValue={playerName} onChange={handleChange}/>;
    } 

    return (
        <li className={isActive ? "active" : "none"}>
            <span className="player">
                {playerNameUI}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{!isEditing ? "Edit" : "Save"}</button>
        </li>
    );
}