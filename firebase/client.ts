import {getApp, getApps, initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCpimqugsNGl7Dbsjel0xUwJzceB6G1ADo",
    authDomain: "careerpilot-6fce5.firebaseapp.com",
    projectId: "careerpilot-6fce5",
    storageBucket: "careerpilot-6fce5.firebasestorage.app",
    messagingSenderId: "72256288981",
    appId: "1:72256288981:web:617ecefcf5d8684c640a5c",
    measurementId: "G-QC76L4TFLK"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);