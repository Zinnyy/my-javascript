
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
  import { getFirestore, collection, addDoc, where, orderBy ,query, Timestamp, onSnapshot} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCbHmzrwgSx-QHfLqwiZ_ZegOVMj1oAOWI",
    authDomain: "facetime-e8d6b.firebaseapp.com",
    projectId: "facetime-e8d6b",
    storageBucket: "facetime-e8d6b.appspot.com",
    messagingSenderId: "306962335332",
    appId: "1:306962335332:web:61f87ed68d532c6787c171"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);


  export {  db , collection, addDoc, where, query, Timestamp, orderBy, onSnapshot }