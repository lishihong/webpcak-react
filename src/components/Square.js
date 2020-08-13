import React from 'react';
// class Square extends React.Component {
//   render() {
//     return (
//       <button className='square' onClick={() => this.props.onClick()}>
//         {this.props.index}
//       </button>
//     )
//   }
// }
/**
 * 函数式组件 不包含 state
 */
function Square(props) {
  return (
    <button className='square' onClick={props.onClick}>
      {props.index}
    </button>
  )
}
export default Square

