import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC_O2Q3EKQW4s5O8HlnhMQ2RNaaTjSVXtU',
  authDomain: 'raychat-9b9d9.firebaseapp.com',
  projectId: 'raychat-9b9d9',
  storageBucket: 'raychat-9b9d9.appspot.com',
  messagingSenderId: '21393264013',
  appId: '1:21393264013:web:81408d01bd5ec7ab9f81c4',
  measurementId: 'G-15FFDPTYML',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
