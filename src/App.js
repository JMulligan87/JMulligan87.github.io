import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Appbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Appbar />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
