// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRozOQwmSOwIciuplvMSe2rrIN9FR3rRE",
  authDomain: "netflix-gpt-62286.firebaseapp.com",
  projectId: "netflix-gpt-62286",
  storageBucket: "netflix-gpt-62286.appspot.com",
  messagingSenderId: "19329119875",
  appId: "1:19329119875:web:674a3f98211dfe585ecdb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Pass the app instance
