
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8VeQSJNAejVpHdQDqhC5HESPK5AjyH5A",
  authDomain: "dragon-news-e0ad4.firebaseapp.com",
  projectId: "dragon-news-e0ad4",
  storageBucket: "dragon-news-e0ad4.firebasestorage.app",
  messagingSenderId: "629407004022",
  appId: "1:629407004022:web:24463b987caa94be9a7657"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;