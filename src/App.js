import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    
    <Router>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/cart' component={Cart}></Route>
      </Switch>
    </Router>
   
  );
}

export default App;
