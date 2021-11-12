// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app"; 
import {getFirestore} from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFqEZpyE-va69wkxBAf5_bQ4wNx55WKO8",
  authDomain: "digitstore-1b726.firebaseapp.com",
  projectId: "digitstore-1b726",
  storageBucket: "digitstore-1b726.appspot.com",
  messagingSenderId: "1036390526977",
  appId: "1:1036390526977:web:3aca0cfa85827ffa2bd000",
  measurementId: "G-ZBR088PNWV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const getData = () => getFirestore(app)

