import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase init
const firebaseConfig = {
    apiKey: "AIzaSyBwmfNncp03Or_PZfoI0PvqoP_Iviy5dOc",
    authDomain: "blipquiz.firebaseapp.com",
    projectId: "blipquiz",
    storageBucket: "blipquiz.appspot.com",
    messagingSenderId: "747854309345",
    appId: "1:747854309345:web:dffec72a2efa5d1df454a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;