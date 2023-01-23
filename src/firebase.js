import {initializeApp} from 'firebase/app';
import GetAuth from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBqgcC5ThZzSIDgv30I97IHG-ySodz6ym8',
  authDomain: 'raychat-eaab5.firebaseapp.com',
  projectId: 'raychat-eaab5',
  storageBucket: 'raychat-eaab5.appspot.com',
  messagingSenderId: '879625881126',
  appId: '1:879625881126:web:94c5f0ba073c28a95608e7',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = GetAuth();
