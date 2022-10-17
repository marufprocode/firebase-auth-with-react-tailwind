// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsemRs0qefsybe9E3Tjzyk_a7nwfY9kTg",
  authDomain: "auth-context-api-with-tailwind.firebaseapp.com",
  projectId: "auth-context-api-with-tailwind",
  storageBucket: "auth-context-api-with-tailwind.appspot.com",
  messagingSenderId: "519231259961",
  appId: "1:519231259961:web:e26d1cc7eff0818cd6d4e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;