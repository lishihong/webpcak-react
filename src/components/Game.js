import React,{useState} from 'react';
import Board from './Board'
// class Game extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       history: [{
//         squares: Array(9).fill(null),
//       }],
//       stepNumber: 0,
//       xIsNext: true,
//     };
//     this.winner = null
//   }
//   componentDidUpdate() {

//   }
//   jumpTo(step) {
//     if(this.winner) {
//       alert('不能跳回以前的步骤，游戏已结束')
//       return
//     }
//     this.setState({
//       stepNumber: step,
//       xIsNext: (step % 2) === 0,
//     });
//   }
//   render() {
//     const history = this.state.history;
//     const current = history[this.state.stepNumber];
//     const winner = calculateWinner(current.squares);
//     const moves = history.map((step, move) => {
//       const desc = move ?
//         'Go to move #' + move :
//         'Go to game start';
//       return (
//         <li key={move}>
//           <button onClick={() => this.jumpTo(move)}>{desc}</button>
//         </li>
//       );
//     });
//     let status;
//     this.winner = winner
//     if (winner) {
//       status = 'Winner: ' + winner;
//     } else {
//       status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
//     }

//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board 
//             squares={current.squares}
//             onClick={(i) => this.handleClick(i)}
//           />
//         </div>
//         <div className="game-info">
//           <div>{status}</div>
//           <ol>{moves}</ol>
//         </div>
//       </div>
//     )
//   }
//   handleClick(i) {
//     const history = this.state.history.slice(0, this.state.stepNumber + 1);
//     const current = history[history.length - 1];
//     const squares = current.squares.slice();
//     const winner = calculateWinner(squares)
//     if ( winner || squares[i]) {
//       return;
//     }
//     squares[i] = this.state.xIsNext ? 'X' : 'O';
//     this.setState({
//       history: history.concat([{
//         squares: squares,
//       }]),
//       stepNumber: history.length,
//       xIsNext: !this.state.xIsNext,
//     });
//   }
// }
// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }
function Game () {
  let winner = null
  const [stepNumber,setStepNumber] = useState(0)
  const [xIsNext,setXIsNext] = useState(true)
  const [history,setHistory] = useState([{squares: Array(9).fill(null)}])
  const jumpTo = (step) => {
    if(winner) {
      alert('不能跳回以前的步骤，游戏已结束')
      return
    }
    setStepNumber(step)
    setXIsNext((step % 2) === 0)
  }
  const current = history[stepNumber]
  winner = calculateWinner(current.squares)
  const moves = history.map((step, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });
  let status
  if (winner) {
    status = 'Winner: ' + winner
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O')
  }
  const handleClick = (i)=>{
    const historyTemp = history.slice(0,stepNumber + 1);
    const current = historyTemp[historyTemp.length - 1];
    const squares = current.squares.slice();
    winner = calculateWinner(squares)
    if ( winner || squares[i]) {
      return
    }
    squares[i] = xIsNext ? 'X' : 'O'
    setHistory(historyTemp.concat([{squares}]))
    setStepNumber(historyTemp.length)
    setXIsNext(!xIsNext)
  }
  return (
    <div className="game">
      <div className="game-board">
        <Board 
          squares={current.squares}
          onClick={(i) => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  )
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
export default Game