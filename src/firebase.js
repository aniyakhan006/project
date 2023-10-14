// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}from 'firebase/auth';
import{getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXbr6NnmdHYK9ICm2QAawOmEinyzMeQRk",
  authDomain: "pensieve-78684.firebaseapp.com",
  projectId: "pensieve-78684",
  storageBucket: "pensieve-78684.appspot.com",
  messagingSenderId: "83002120478",
  appId: "1:83002120478:web:152971b0c34fe74c79d10f",
  measurementId: "G-4S8HYF9063"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);