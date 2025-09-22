// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAv5x8nW3s_Vgi1bpCC1viqghhzvC0L_Co",
  authDomain: "mern-blog-f1ee9.firebaseapp.com",
  projectId: "mern-blog-f1ee9",
  storageBucket: "mern-blog-f1ee9.firebasestorage.app",
  messagingSenderId: "631351877097",
  appId: "1:631351877097:web:5f7c7ea5ff7543c9007f78",
  measurementId: "G-TBX991VZ45"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
