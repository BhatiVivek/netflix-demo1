// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl3ZByhEgilCAaIR_BiqA9_ZHY-otkObU",
  authDomain: "netflix-09.firebaseapp.com",
  projectId: "netflix-09",
  storageBucket: "netflix-09.appspot.com",
  messagingSenderId: "753288369802",
  appId: "1:753288369802:web:d6c86b7966e8d4c8cc7f73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };