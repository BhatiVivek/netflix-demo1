// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLFBSTeXPt-oYNWcpVr2ItgJqpqPhv4cE",
  authDomain: "netflix-9192.firebaseapp.com",
  projectId: "netflix-9192",
  storageBucket: "netflix-9192.appspot.com",
  messagingSenderId: "416099197043",
  appId: "1:416099197043:web:0b67b992fb945e73650a06",
  measurementId: "G-ER604784G0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);