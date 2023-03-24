// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, collection } from  "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgUu_mnJNGOtcuHLpwnhr3hINswNRb88c",
  authDomain: "chat-room-1c20f.firebaseapp.com",
  projectId: "chat-room-1c20f",
  storageBucket: "chat-room-1c20f.appspot.com",
  messagingSenderId: "365223547983",
  appId: "1:365223547983:web:cbf5930e441b01c8d0063a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const chatt = collection(db, 'chat')


