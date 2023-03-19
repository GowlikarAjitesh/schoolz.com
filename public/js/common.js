import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, collection, setDoc, getDoc, updateDoc } from "firebase/firestore";
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
const firebase = initializeApp(firebaseConfig);
const dp = getFirestore();
// send data function
const sendData = (path, data) => {
    fetch(path, {
        method: 'post',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(data)

    })
    .then(res => res.json())
    .then(data => processData(data));
}

const processData = (data) => {
    console.log(data);
    loader.style.display = null;
    if(data.alert){
        showAlert(data.alert);
    }
    else if(data.name){
        sessionStorage.user = JSON.stringify(data);
        location.replace('/');
    }
    else if(data.product){
        sessionStorage.user = JSON.stringify(data);
        location.replace('/');
    }
}

const showAlert = (msg) => {
    let alertBox = document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 1000);
}