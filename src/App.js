import React, {useContext} from 'react';
import Login from './pages/Login';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Register from './pages/register';
import HomePage from './pages/HomePage';
import ThemeContextProvider, {
  ThemeContext,
} from './context/ThemeContextProvider';
import {AuthContext} from './context/AuthContext';

function App() {
  const {theme} = useContext(ThemeContext);
  const {currentUser} = useContext(AuthContext);
  console.log(currentUser);

  // const ProtectedRoutes = () => {
  //   if (!currentUser) {
  //     return <Navigate to='/login' />;
  //   } else {
  //     return <Navigate to='/' />;
  //   }
  // };

  return (
    <div id={theme}>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route
            path='/'
            element={
              // <ProtectedRoutes>
                <HomePage />
              // </ProtectedRoutes>
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
