// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP4eBqhBCML-zKnlA0B8IDg7Mhfw0EQRA",
  authDomain: "gigatech-f3144.firebaseapp.com",
  projectId: "gigatech-f3144",
  storageBucket: "gigatech-f3144.appspot.com",
  messagingSenderId: "401626773552",
  appId: "1:401626773552:web:63481e0fee04aa043695f5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default app;