// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyADzvQg69qrGAdzs9nwTfPEaOnaem2CCqo",
    authDomain: "protoconectados.firebaseapp.com",
    databaseURL: "https://protoconectados-default-rtdb.firebaseio.com",
    projectId: "protoconectados",
    storageBucket: "protoconectados.appspot.com",
    messagingSenderId: "227070954582",
    appId: "1:227070954582:web:42f595fc14475c8de5fff7"
  };
  
// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const storageApp = getStorage(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
