import React, {useContext} from 'react';
import Login from './pages/Login';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Register from './pages/register';
import HomePage from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';
import ThemeContextProvider, {
  ThemeContext,
} from './context/ThemeContextProvider';
// import {ProtectedRoutes} from './ProtectedRoutes';

function App() {
  const {theme} = useContext(ThemeContext);

  return (
    <div id={theme}>
      <Router>
        <Routes>
        <Route path='*' element={<PageNotFound/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route
            path='/'
            element={
              // <ProtectedRoutes>
                <HomePage />
              // {/* </ProtectedRoutes> */}
            }
          />
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
