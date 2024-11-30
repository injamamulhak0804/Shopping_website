// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFtVLE7M6KO9FoiyDD2lnQKr9-dyyrIMU",
  authDomain: "test00-70bd5.firebaseapp.com",
  projectId: "test00-70bd5",
  storageBucket: "test00-70bd5.firebasestorage.app",
  messagingSenderId: "133836328483",
  appId: "1:133836328483:web:9f73ecfef8a313aa646b96",
  measurementId: "G-V6GQPM67D6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);