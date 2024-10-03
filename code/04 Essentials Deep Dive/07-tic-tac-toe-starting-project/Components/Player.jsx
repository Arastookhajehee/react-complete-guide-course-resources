import {useState} from 'react';


export default function Player({ name, symbol }) {
    const [isEditing, setIsEditting] = useState(false);


    function handleClick() {
        setIsEditting(isEditing ? false : true);
    }


    let inputContent = <input type="text" required value={name} />;
    let playerName = <span className="player-name">{name}</span>;

    return (
        
        <li>
            <span className='player'>
                {!isEditing ? playerName :inputContent}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{!isEditing ? "Edit" : "Save"}</button>

        </li>
    );
}