// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { Timestamp, addDoc, deleteDoc, doc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
//import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDar7CLUi_gG2ZXAWNrIAq1rR_qDENUmr4",
    authDomain: "zinny-57d5e.firebaseapp.com",
    projectId: "zinny-57d5e",
    storageBucket: "zinny-57d5e.appspot.com",
    messagingSenderId: "840482760945",
    appId: "1:840482760945:web:bb62f98981c82757b7e150"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const list = document.querySelector('ul')
const form = document.querySelector('form')
const button = document.querySelector('button')

const addRecipe = (recipe, id) => {
    // let time = recipe.created_at ? `${recipe.created_at.toDate()}` : '';
    let time = `${recipe.created_at.toDate()}`
    let html = `
    <li data-id=${id}>
    <div>${recipe.title}</div>
    <div>${time}</div>
     <button class="btn btn-danger btn-sm my-2">delete</button>
    </li>
    `
list.innerHTML += html;
}

const deleteRecip = (id) => {
const foodd = document.querySelectorAll('li');
foodd.forEach(recip => {
    if(recip.getAttribute(data-id) === id){
        recip.remove()
    }
})
}


const foodCollection = collection(db, 'food')
const q = onSnapshot(foodCollection, (snapshot) => {
    snapshot.docChanges().forEach(change => {
         const doc = change.doc
         if(change.type === 'added'){
        console.log(doc.data(), doc.id)
        addRecipe(doc.data(), doc.id)
         }else if(change.data === 'removed'){
            deleteRecip(doc.id)
         }
    });
})

// getDocs(foodCollection).then(snapshot => {
//    snapshot.docs.forEach(change => {
//     console.log(change.data(), change.id)
//    });

//})

list.addEventListener('click', e => {
    //console.log(e.target.tagName)
    if(e.target.tagName === 'BUTTON'){
        const is = e.target.parentElement.getAttribute('data-id')
        const deleted = deleteDoc(doc(db, "food", is)).then(() => {
            console.log('it has been deleted')
        }).catch(err => console.log(err));
    }
})

form.addEventListener('submit', async e => {
     e.preventDefault()
    const now = new Date();
    const foods = await addDoc(collection(db, "food"), {
       title: form.recipe.value.trim(),
       created_at: Timestamp.fromDate(now)
      });
      console.log('recipe has been successfully added', foods)
})

    
button.addEventListener('click', () => {
    q();
})