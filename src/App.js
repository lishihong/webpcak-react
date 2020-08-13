import React from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
// import Game from '@components/Game'
// import ShoppingList from '@components/ShoppingList'
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Product = () => (
  <div>
    <h2>Product</h2>
  </div>
)
function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Product">Product</Link>
        <hr/>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/product" component={Product}></Route>
      </div>
    </Router>
  );
}

export default App
