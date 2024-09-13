// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDnnwoWvF6-QhJbv0ub-yVuXm79kUxlmjM",
  authDomain: "login-with-react-6c0ca.firebaseapp.com",
  projectId: "login-with-react-6c0ca",
  storageBucket: "login-with-react-6c0ca.appspot.com",
  messagingSenderId: "54461892436",
  appId: "1:54461892436:web:5350d2b9c824755b036ac1",
  measurementId: "G-BTHJ9NVK9G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);