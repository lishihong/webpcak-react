/**
 * 严格模式下，本地开发，render等方法会执行2次，生产模式时候不会
 */
/**
 * React.Component 类型组件
 * jsx 语法
 * */ 
import React from 'react';
class ShoppingList extends React.Component {
  render () {
    console.log(this,'t---------')
    return (
      <div>
        <h1>Shoopping list for {this.props.name}</h1>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    )
  }
}
/**
 * createElement 写法
 * React.createElement 接收三个参数 
 * 1. type: Html标签  
 * 2. props: Html属性（class、id等） 
 * 3. children: 内容
 */
// class ShoppingList extends React.Component {
//   render () {
//     console.log(this,'t---------')
//     return React.createElement('div',{className:'shopping-con'},
//       React.createElement('h1',null,'Shoopping list for ',this.props.name),
//       React.createElement('ul',null,React.createElement('li',null,1),React.createElement('li',null,'2'),React.createElement('li',null,'3')),
//     )
//   }
// }
/**
 * createClass 写法
 */
// const ShoppingList = React.createClass({
//   render () {
//     return (
//       <div>
//         <h1>Shoopping list for {this.props.name}</h1>
//         <ul>
//           <li>1</li>
//           <li>2</li>
//           <li>3</li>
//         </ul>
//       </div>
//     )
//   }
// })

// 3种写法都支持 jsx语法 或者 createElement语法
export default ShoppingList