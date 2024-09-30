import "./index.css"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useState } from "react";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./components/Winning-Combination";
import GameOver from "./components/GameOver";

const initialGameBoard = [
  [null , null , null],
  [null , null , null],
  [null , null , null],
  
  
];

function deriveActive(gameTurn){
  let currentPlayer = "X";
  if(gameTurn.length>0 && gameTurn[0].player === 'X'){
    currentPlayer ="O";
  }
  return currentPlayer;
}
function App() {
  const [gameTurn , setGameTurn] = useState([])
  const activePlayer = deriveActive(gameTurn);
 
  let gameBoard = [...initialGameBoard.map(array=>[...array])];
  for(const turn of gameTurn){
    const {square , player}=turn;
    const {row ,col}=square;
    gameBoard[row ][col]=player
  }
  let winner;
  for(const combination of WINNING_COMBINATIONS){
    const firstSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSymbol = gameBoard[combination[2].row][combination[2].column];
    if(firstSymbol &&  firstSymbol===secondSymbol && firstSymbol === thirdSymbol){
      winner = firstSymbol
    }
  }
  const hasDraw = gameTurn.length===9 && !winner
  const handleActive=(rowIndex , colIndex)=>{
    
    setGameTurn((prev)=>{
      const activePlayer = deriveActive(prev)
      const updateTurn = [{square:{row:rowIndex , col:colIndex},player:activePlayer},...prev]
      return updateTurn
    })
    
  }
const handleRestart = ()=>{
  setGameTurn([])
}
  return (

    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          
          <Player name="Player 1" symbol="X" isActive ={activePlayer === "X"} />
          <Player name="Player 2" symbol="0" isActive = {activePlayer ==="O"}/>
        </ol>
        {(winner|| hasDraw )&& <GameOver onRestart={handleRestart} winner = {winner}/>}
        <GameBoard isSelected={handleActive} board={gameBoard} />
      </div>
      <Log turns={gameTurn}/>
    </main>
  )
}

export default App
