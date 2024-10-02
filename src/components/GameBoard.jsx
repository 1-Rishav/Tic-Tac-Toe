import React, { useState } from "react";


function GameBoard({isSelected ,board}) {
  
  /* const [gameBoard , setGameBoard]= useState(initialGameBoard);
  const handleSelect=(rowIndex, colIndex)=>{
    setGameBoard((prevGameBoard)=>{
      const updateBoard = [...prevGameBoard.map(innerArray=>[...innerArray])];
      updateBoard[rowIndex][colIndex] = activePlayer; 
      return updateBoard;
    })
    isSelected();
  } */
 
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=>isSelected(rowIndex,colIndex)} disabled={playerSymbol !==null}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;
