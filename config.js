
const firebase = require("firebase");
// Import the functions you need from the SDKs you need// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, collection, setDoc, getDoc, updateDoc } from "firebase/firestore";
import bodyParser from "body-parser";
const firebaseConfig = {
    apiKey: "AIzaSyAXt1tFZsN6Fx4EySzFzSVaL4ZGCg0_kmI",
    authDomain: "miniproject-fde89.firebaseapp.com",
    projectId: "miniproject-fde89",
    storageBucket: "miniproject-fde89.appspot.com",
    messagingSenderId: "39507458781",
    appId: "1:39507458781:web:19c545e134277ec090f934",
    measurementId: "G-M3J50LBW7S"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const dp = firebase.getFirestore();
const user = dp.collection('users');
module.exports=users;