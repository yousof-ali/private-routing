// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDybNMdMjuoLwuH6HdCRjt289YPMyasBBE",
  authDomain: "private-routing-5ea70.firebaseapp.com",
  projectId: "private-routing-5ea70",
  storageBucket: "private-routing-5ea70.appspot.com",
  messagingSenderId: "1069889250437",
  appId: "1:1069889250437:web:f7bb2c5b5145be59f6b5ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;