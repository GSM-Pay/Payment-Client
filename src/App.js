import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import './App.css';
import Login from './Login';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
