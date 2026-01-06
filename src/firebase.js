// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNoM-7gmhFERJU-uBlt_7ZTya9F3xRLnk",
  authDomain: "baklawa-projet.firebaseapp.com",
  projectId: "baklawa-projet",
  storageBucket: "baklawa-projet.firebasestorage.app",
  messagingSenderId: "511453409322",
  appId: "1:511453409322:web:9404de75547cf3c21e5353",
  measurementId: "G-E7TFRX5HJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
