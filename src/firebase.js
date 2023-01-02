// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC2mrD-G2eI9epfLMWJwHai-zPX1kjR-Bg',
  authDomain: 'react-disney-plus-app-abf2e.firebaseapp.com',
  projectId: 'react-disney-plus-app-abf2e',
  storageBucket: 'react-disney-plus-app-abf2e.appspot.com',
  messagingSenderId: '179036991666',
  appId: '1:179036991666:web:ee74db7c7cdd8186a719ab',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
