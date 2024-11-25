// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsnNmKVCOCDGdq485bKxxESC2h6qnojg8",
  authDomain: "todolist-afe2b.firebaseapp.com",
  projectId: "todolist-afe2b",
  storageBucket: "todolist-afe2b.firebasestorage.app",
  messagingSenderId: "47681071044",
  appId: "1:47681071044:web:c0b9d7798839083d202691",
  measurementId: "G-RMVRQDNZ1X"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);