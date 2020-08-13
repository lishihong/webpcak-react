import React from 'react';
import Square from './Square'
// class Board extends React.Component {
//   renderSquare(i) {
//     return <Square index={this.props.squares[i]}  onClick={() => this.props.onClick(i)}/>
//   }
//   render() {
//     return (
//       <div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     )
//   }
// }
function Board(props) {
  const arr = [[0,1,2],[3,4,5],[6,7,8]]
  const board =  arr.map((item,index)=>{
    let row = item.map((d)=>{
      return <Square index={props.squares[d]}  onClick={() => props.onClick(d)} key={d}/>
    })
    return <div className="board-row" key={index}>{row}</div>
  })
  return (
    <>
      {board}
    </>
  )
}
export default Board