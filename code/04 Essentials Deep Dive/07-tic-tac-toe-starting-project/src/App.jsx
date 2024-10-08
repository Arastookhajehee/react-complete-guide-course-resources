// import Box from './Components/Box.jsx';
import Player from '../Components/Player.jsx';
import GameBoard from '../Components/GameBoard.jsx';

import {useState} from 'react';


function App() {
  
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) =>  curActivePlayer === 'X' ? 'O' : 'X');
  }


  return(
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>

        <GameBoard activePlayer={activePlayer} onSelectSquare={handleSelectSquare} />
      </div>

      Log
    </main>
  );
}

export default App
