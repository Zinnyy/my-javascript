// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { Timestamp, addDoc, deleteDoc, doc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
//import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3E6F6oRWHW_Pz0mtgztbmI2oUe-6d-F8",
  authDomain: "javascript-2-3f3d8.firebaseapp.com",
  projectId: "javascript-2-3f3d8",
  storageBucket: "javascript-2-3f3d8.appspot.com",
  messagingSenderId: "1092312405848",
  appId: "1:1092312405848:web:ea6c296d4a3d73a099b72d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const list = document.querySelector('ul')
const form = document.querySelector('form')
const button = document.querySelector('button')

//list template
const addRecipe = (recipe, id) => {
  let time = `${recipe.created_at.toDate()}`
  let html = `
  <li data-id="${id}">
  <div>${recipe.title}</div>
  <div>${time}</div>
  <button class="btn btn-danger btn-sm my-2">delete</button>
  </li>
  `
  
  list.innerHTML += html
}

const deleteFood = (id) => {
const food = document.querySelectorAll('li');
food.forEach(recip => {
  if(recip.getAttribute('data-id') === id){
    recip.remove();
  }
})
}

//data from the database

//const unsub = () => {
const foodcollection = collection(db, "javascript")
const q = onSnapshot(foodcollection, (snapshot) => {
  snapshot.docChanges().forEach(change => {
    const doc = change.doc;
    if(change.type === 'added'){
      console.log(doc.data())
      addRecipe(doc.data(), doc.id)
    }else if(change.type === 'removed'){
      deleteFood(doc.id);
    }

  })
})
//}
//  getDocs(foodcollection).then(snapshot => {
// //when we have the data
//      snapshot.docs.forEach(doc => {
//       //console.log(doc.data())
//         addRecipe(doc.data(), doc.id)
//      });
//  }).catch(err => {
//      console.log(err)
//  })

 //add documents
form.addEventListener('submit', async e => {
e.preventDefault();

const now = new Date();
const food = await addDoc(collection(db, 'javascript'),{
  title: form.recipe.value.trim(),
  created_at: Timestamp.fromDate(now)
})

console.log('recipe added', food)
})

//deleting data 

list.addEventListener('click', e => {
  //console.log(e)
  if(e.target.tagName === 'BUTTON'){
    const iss = e.target.parentElement.getAttribute('data-id')
    deleteDoc(doc(db, "javascript", iss)).then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }
})

//unsubscribe
button.addEventListener('click', () => {
  //if(foodcollection){
 q();
  console.log('you have successfully unsubscribed')
  
})

