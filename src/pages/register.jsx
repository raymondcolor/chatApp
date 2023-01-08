import React from 'react';
import LoginImage from '../images/1.jpg';
import {Link} from 'react-router-dom';

const Register = () => {
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
              <h2>Register</h2>
            </div>

            <form action=''>
              <input type='text' placeholder='User name' />

              <input type='email' placeholder='Email' />

              <input style={{display: 'none'}} type='file' id='file' />
              <label htmlFor='file'>Upload photo</label>

              <input type='password' placeholder='Password' />

              <button>Create account</button>
            </form>

            <p>
              Already have an account?
              <Link to='/'>Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
