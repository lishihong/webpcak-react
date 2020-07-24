/**
 * React.Component 类型组件
 * 
 * */ 
import React from 'react';
class ShoppingList extends React.Component {
  render () {
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

export default ShoppingList