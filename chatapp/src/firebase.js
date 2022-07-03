
import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
// import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDcWh9rIlcl5FCBoMpxoQ34aUf009EIH2I",
  authDomain: "jiwoncpn.firebaseapp.com",
  databaseURL: "https://jiwoncpn-default-rtdb.firebaseio.com",
  projectId: "jiwoncpn",
  storageBucket: "jiwoncpn.appspot.com",
  messagingSenderId: "636021889166",
  appId: "1:636021889166:web:91e97a281dbd0af09fd1df",
  measurementId: "G-8JPRLBLEY4"
};

initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);