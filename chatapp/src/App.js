import React from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // eslint-disable-next-line
  Link
} from "react-router-dom";

import ChatPage from './components/ChatPage/ChatPage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';

function App(){
  return(
    <Router>
        <Routes>
          <Route exact path="/" component={ChatPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
        </Routes>
    </Router>

  );
}

export default App;