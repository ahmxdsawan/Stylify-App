// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6HMXw5CuFnkpcebp7vBMo5PikJhUHzQY",
  authDomain: "stylit-81f77.firebaseapp.com",
  projectId: "stylit-81f77",
  storageBucket: "stylit-81f77.appspot.com",
  messagingSenderId: "1055150710177",
  appId: "1:1055150710177:web:dfbaf870e3bcbe4d2c7fe0",
  measurementId: "G-ZWDBPCRZXX"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}
else{
    app = firebase.app()
}

const auth = firebase.auth()
export {auth};