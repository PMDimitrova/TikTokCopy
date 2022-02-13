// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7A2JWej-K9NScR1X-Zf3e5t-TCqT4sh0",
  authDomain: "tiktok-copy-ae556.firebaseapp.com",
  projectId: "tiktok-copy-ae556",
  storageBucket: "tiktok-copy-ae556.appspot.com",
  messagingSenderId: "45465524890",
  appId: "1:45465524890:web:e9e614c0844336b2e8dd23",
  measurementId: "G-SY4VR1WJNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);