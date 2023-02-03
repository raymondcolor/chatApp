import React, {useContext, useState} from 'react';
import LoginImage from '../images/1.jpg';
import {Link} from 'react-router-dom';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import VisibilityContextProvider, {
  VisibilityContext,
} from '../context/VisibilityContextProvider';
import {auth, storage, db} from '../firebase';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import {doc, setDoc} from 'firebase/firestore';

const Register = () => {
  const {type, changeInput, show} = useContext(VisibilityContext);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res;
    try {
      res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, userName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        (error) => {
          setError(true);
        },
        async () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              userName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, 'users', res.user.uid), {
              uid: res.user.uid,
              userName: userName,
              email: email,
              photoURL: downloadURL,git
            });
          });
        },
      );
    } catch {
      setError(true);
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
            {error && <span>There was an error</span>}
            <div className='formHeading'>
              <h1>
                Ray<span>Chat</span>
              </h1>
              <h2>Register</h2>
            </div>
            <div className='formContainer'>
              <input
                type='text'
                placeholder='User name'
                onChange={(e) => setUserName(e.target.value)}
              />

              <input
                type='email'
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                style={{display: 'none'}}
                type='file'
                id='file'
                onChange={(e) => setFile(e.target.files[0])}
              />
              <label htmlFor='file'>Upload photo</label>

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

              <button onClick={handleSubmit}>Create account</button>
            </div>
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

function RegisterWrapper() {
  return (
    <VisibilityContextProvider>
      <Register />
    </VisibilityContextProvider>
  );
}
export default RegisterWrapper;
