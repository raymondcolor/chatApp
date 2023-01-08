import React from 'react';
import LoginImage from '../images/1.jpg';
import {Link} from 'react-router-dom';

const Login = () => {
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
              <input type='password' placeholder='Password' />
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

export default Login;