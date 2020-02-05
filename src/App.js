import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Appbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import './App.css';
import Resume from './components/resume/Resume';

function App() {
  return (
    <Router>
      <Appbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/resume' component={Resume} />
      </Switch>
    </Router>
  );
}

export default App;
