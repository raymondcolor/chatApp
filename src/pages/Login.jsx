import React, {useContext} from 'react';
import LoginImage from '../images/1.jpg';
import {Link} from 'react-router-dom';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import VisibilityContextProvider, {
  VisibilityContext,
} from '../context/VisibilityContextProvider';

const Login = () => {
  const {type, changeInput, show} = useContext(VisibilityContext);

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

            <form action=''>
              <input type='email' placeholder='Email' />
              <div className='pswdDiv'>
                <input type={type} placeholder='Password' />
                <div className='icon' onClick={changeInput}>
                  {show ? <Visibility /> : <VisibilityOff />}
                </div>
              </div>
              <button>Login in</button>
            </form>

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
  )
}

export default LonginWrapper;

