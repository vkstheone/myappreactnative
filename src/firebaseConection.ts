// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";



// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpG2jpRNW61fzkfZecYX2X8L2HjHd37AY",
  authDomain: "react-native-47be5.firebaseapp.com",
  projectId: "react-native-47be5",
  storageBucket: "react-native-47be5.firebasestorage.app",
  messagingSenderId: "678732580893",
  appId: "1:678732580893:web:a29cbba1fc909b7630def4",
  measurementId: "G-MQKGGGN0ZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}

