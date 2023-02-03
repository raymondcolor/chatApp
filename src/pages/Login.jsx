import React, {useContext, useState} from 'react';
import LoginImage from '../images/1.jpg';
import {Link, useNavigate} from 'react-router-dom';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import VisibilityContextProvider, {
  VisibilityContext,
} from '../context/VisibilityContextProvider';

import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebase';

const Login = () => {
  const {type, changeInput, show} = useContext(VisibilityContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch {
      // setError(true);
    }
  };
  return (
    <div>
      <div className='login'>
        <div className='loginLeft'>
          <img src={LoginImage} alt='lady' />
        </div>

        <div className='loginRight'>
          <div className='formDiv'>
            <div className='formHeading'>
              <h1>
                Ray<span>Chat</span>
              </h1>
              <h2>Login</h2>
            </div>

            <div className='formContainer'>
              <input
                type='email'
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className='pswdDiv'>
                <input
                  type={type}
                  placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className='icon' onClick={changeInput}>
                  {show ? <Visibility /> : <VisibilityOff />}
                </div>
              </div>
              <button onClick={handleSubmit}>Login in</button>
            </div>

            <p>
              You dont have an account?{' '}
              <Link to='/register'>Create Account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

function LonginWrapper() {
  return (
    <VisibilityContextProvider>
      <Login />
    </VisibilityContextProvider>
  );
}

export default LonginWrapper;
