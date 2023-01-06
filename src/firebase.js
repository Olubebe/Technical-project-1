// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsCWwyNKOup1tz-TQ1jNp1ZanQgy9ZX8U",
  authDomain: "technical-project-c59fc.firebaseapp.com",
  projectId: "technical-project-c59fc",
  storageBucket: "technical-project-c59fc.appspot.com",
  messagingSenderId: "621534287636",
  appId: "1:621534287636:web:31561fb06403ed454d5401"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth =getAuth(app)
export default app