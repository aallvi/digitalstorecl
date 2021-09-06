// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import {getFirestore, collection, getDocs} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcy5JBMg9BnFsQ-vLtiUJfx775KY03IxE",
  authDomain: "digitalstore-dcf31.firebaseapp.com",
  projectId: "digitalstore-dcf31",
  storageBucket: "digitalstore-dcf31.appspot.com",
  messagingSenderId: "808333998338",
  appId: "1:808333998338:web:53511eec15dd5a5e3cea1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getData = () => getFirestore(app)