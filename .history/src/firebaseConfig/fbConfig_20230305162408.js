// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmIQ9-oUSHyxbQewz6CuYn5NkvKWsiQ_U",
  authDomain: "fir-auth-f08ad.firebaseapp.com",
  projectId: "fir-auth-f08ad",
  storageBucket: "fir-auth-f08ad.appspot.com",
  messagingSenderId: "401313850943",
  appId: "1:401313850943:web:5f9f2f3cdf6686138e3a8a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
