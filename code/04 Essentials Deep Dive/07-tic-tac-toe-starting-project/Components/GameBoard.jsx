import { useState } from "react";
const initialGameBoard = [[null,null,null],[null,null,null],[null,null,null]];

export default function GameBoard({ activePlayer, onSelectSquare}) 
{
    const [gameBoard, setGameBoard] = useState(initialGameBoard);   

    function handleClick(rowIndex, colIndex){
        setGameBoard((prev) => {
            const updatedArray = [...prev.map((row) => [...row])];
            updatedArray[rowIndex][colIndex] = activePlayer;
            return updatedArray;
        });

        onSelectSquare();
        
    }

    return (
        <ol id="game-board">
          {gameBoard.map((row,rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol,colIndex) => <li key={colIndex}><button 
                onClick={() => handleClick(rowIndex, colIndex)}>{playerSymbol}</button></li>)}
            </ol>
          </li>)} 
          
        </ol>
    );
}