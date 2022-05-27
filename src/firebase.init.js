// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAG8FCFeFJXtQYkaI_hNSj85uw0Jh_M8Gw",
    authDomain: "router-firebase-integrat-5766d.firebaseapp.com",
    projectId: "router-firebase-integrat-5766d",
    storageBucket: "router-firebase-integrat-5766d.appspot.com",
    messagingSenderId: "109975591710",
    appId: "1:109975591710:web:8b0bcb9911d478185f870f",
    measurementId: "G-DXV7PDKXQT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;