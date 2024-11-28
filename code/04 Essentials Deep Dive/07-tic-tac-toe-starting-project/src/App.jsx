// import Box from './Components/Box.jsx';
import Player from '../Components/Player.jsx';
import GameBoard from '../Components/GameBoard.jsx';
import Log from '../Components/Log.jsx';
import { useState } from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare(rowIndex, colInex) {
    setActivePlayer((curActivePlayer) => { curActivePlayer === "X" ? "O" : "X" });
    setGameTurns((prevTurns) => {
      let currentPlayer = 'X';

      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colInex }, player: currentPlayer },
         ...prevTurns,
      ];

      return updatedTurns;
    });

    return (
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"}></Player>
            <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"}></Player>
          </ol>
          <GameBoard
            onSelectSquare={handleSelectSquare}
            turns={gameTurns} />
        </div>
        <Log />
      </main>
    );
  }
}

export default App;
