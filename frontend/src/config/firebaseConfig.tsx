import { firebaseConfig } from "./configData";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { db, auth };