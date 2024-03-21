// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtSq_q8gsR4mWU-_CYZjiaEZIO4Be3PFM",
  authDomain: "hat-bazaar-with-firebase-auth.firebaseapp.com",
  projectId: "hat-bazaar-with-firebase-auth",
  storageBucket: "hat-bazaar-with-firebase-auth.appspot.com",
  messagingSenderId: "289308896376",
  appId: "1:289308896376:web:1a5656030aebdbf0ae118d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;