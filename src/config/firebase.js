// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDNn3_JqVA4xqXA_29NyMAvRoA5k9S-ClQ",
  authDomain: "to-do-list-77db2.firebaseapp.com",
  projectId: "to-do-list-77db2",
  storageBucket: "to-do-list-77db2.appspot.com",
  messagingSenderId: "402595544750",
  appId: "1:402595544750:web:30a4e6301df93bae8c373f",
  measurementId: "G-Z171B39LQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app)
//const analytics = getAnalytics(app);

export {auth, db};