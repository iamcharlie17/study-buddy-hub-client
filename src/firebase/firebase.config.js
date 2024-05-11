// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9W2zHQcKmEdLUaoDxjJ8hqRdrVdSj0EA",
  authDomain: "study-buddy-hub-4ba13.firebaseapp.com",
  projectId: "study-buddy-hub-4ba13",
  storageBucket: "study-buddy-hub-4ba13.appspot.com",
  messagingSenderId: "443500836385",
  appId: "1:443500836385:web:552248b2fa95df9af91560"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;
