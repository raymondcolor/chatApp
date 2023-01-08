import React from 'react';
import Login from './pages/Login';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Register from './pages/register';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
