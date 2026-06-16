// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_mXlC_O2_AekgkkO9CKHwyJYLiIgFHJA",
  authDomain: "template-516e4.firebaseapp.com",
  projectId: "template-516e4",
  storageBucket: "template-516e4.firebasestorage.app",
  messagingSenderId: "1008174043973",
  appId: "1:1008174043973:web:940f2ee569ff1ea59c642c"
};

// Initialize Firebase (Singleton pattern to prevent re-initialization in Next.js)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export { app };
