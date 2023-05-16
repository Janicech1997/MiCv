// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_DB_PASSWORD,
  authDomain: "contactos-cv.firebaseapp.com",
  projectId: "contactos-cv",
  storageBucket: "contactos-cv.appspot.com",
  messagingSenderId: "634938271608",
  appId: "1:634938271608:web:3e36e18f08a5fcc2cdca8d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);