// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsgn5OEDINuEYBSoqP5lBqjaERAzS_fL8",
  authDomain: "habitica-3.firebaseapp.com",
  projectId: "habitica-3",
  storageBucket: "habitica-3.firebasestorage.app",
  messagingSenderId: "995653842233",
  appId: "1:995653842233:web:19c5ace3ca3b4b1f9e64e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();

export default getFirestore();