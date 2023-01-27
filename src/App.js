import React, {useContext} from 'react';
import Login from './pages/Login';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Register from './pages/register';
import HomePage from './pages/HomePage';
import ThemeContextProvider, {
  ThemeContext,
} from './context/ThemeContextProvider';

function App() {
  const {theme} = useContext(ThemeContext);

  return (
    <div id={theme}>
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

function AppWrapper() {
  return (
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  );
}

export default AppWrapper;
