import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import MessageList from './Message/MessageList';
import MessageForm from './Message/MessageForm';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="nav-panel">
        <Link to="/">Message</Link>
        <Link to="/add-message">Add message</Link>
      </div>
      <Switch>
        <Route exact path="/" component={MessageList} />
        <Route exact path="/add-message" component={MessageForm} />
      </Switch>
    </div>
  );
}

export default App;
