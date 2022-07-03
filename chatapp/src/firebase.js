
import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
// import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT＿APP＿apiKey,
  authDomain: process.env.REACT＿APP＿authDomain,
  databaseURL: process.env.REACT＿APP＿databaseURL,
  projectId: process.env.REACT＿APP＿projectID,
  storageBucket: process.env.REACT＿APP＿storageBucket,
  messagingSenderId: process.env.REACT＿APP＿messagingSenderId,
  appId: process.env.REACT＿APP＿appId,
  measurementId: process.env.REACT＿APP＿measurementId
};

initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);