// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/compat/app";
import { getFirestore } from "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0l2eYBKoWWDtFQQbwS0z1dYCnYeXSsUE",
  authDomain: "safetyappmobile.firebaseapp.com",
  projectId: "safetyappmobile",
  storageBucket: "safetyappmobile.appspot.com",
  messagingSenderId: "162822325763",
  appId: "1:162822325763:web:ae0e669fb60816d4be7036",
  measurementId: "G-EK5DX56TMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { app }
