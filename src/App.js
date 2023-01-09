import React from 'react';
import Login from './pages/Login';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Register from './pages/register';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
