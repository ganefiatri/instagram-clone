// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBmNvl2q7T4-mrnTAtyINJSQQq_3SGSPt8",
  authDomain: "instagram-clone-b0f9c.firebaseapp.com",
  projectId: "instagram-clone-b0f9c",
  storageBucket: "instagram-clone-b0f9c.appspot.com",
  messagingSenderId: "272197672888",
  appId: "1:272197672888:web:4cd54e4e0f74338c55f94d"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
const db = getFirestore();
const storage = getStorage(app);

export { app, db, storage };