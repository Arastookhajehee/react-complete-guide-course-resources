import {useState} from 'react';


export default function Player({ initialName, symbol, isActive }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditting] = useState(false);


    function handleClick() {
        setIsEditting((editting) => !editting);
    }

    function handleChange(e)
    {
        setPlayerName(e.target.value);
    }

    let inputContent = <input type="text" required onChange={handleChange} value={playerName} />;
    let playerNameContent = <span className="player-name">{playerName}</span>;


    return (
        
        <li className={isActive ? 'active' : undefined}>
            <span className='player'>
                {!isEditing ? playerNameContent :inputContent}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{!isEditing ? "Edit" : "Save"}</button>

        </li>
    );
}