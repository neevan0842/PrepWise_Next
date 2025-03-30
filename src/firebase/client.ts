// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGg9PsLuL1PIv06FaqGPKtdlLwwyZgt5A",
  authDomain: "prepwise-ed3ae.firebaseapp.com",
  projectId: "prepwise-ed3ae",
  storageBucket: "prepwise-ed3ae.firebasestorage.app",
  messagingSenderId: "959291184727",
  appId: "1:959291184727:web:31c8a217faf5551a67b512",
  measurementId: "G-XFTNTTCXPP",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
