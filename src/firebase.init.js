// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUHcM9PPZ68JCFgz2X2-GHL0WFAMcXIB4",
  authDomain: "the-best-car-dealer.firebaseapp.com",
  projectId: "the-best-car-dealer",
  storageBucket: "the-best-car-dealer.appspot.com",
  messagingSenderId: "1079478558298",
  appId: "1:1079478558298:web:fd78fbb6c7fff1e70dc263"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;