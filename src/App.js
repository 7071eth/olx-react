import React from 'react';
import {BrowserRouter as Router,Route } from 'react-router-dom'
import  { useEffect,useContext } from 'react';
import {AuthContext, FirebaseContext} from './store/FirebaseContext'

import Signup from './Pages/Signup'
import './App.css';
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Login from './Pages/Login';

function App() {
  return (
    <div>
      <Router>
      <Route exact path='/' > 
      <Home />
     </Route>
      <Route path='/signup' >
      <Signup />
      </Route>
      <Route path='/login' >
      <Login />
      </Route>
      </Router>
    </div>
  );
}

export default App;
