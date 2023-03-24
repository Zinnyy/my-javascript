// // analystics().collection('javascript').get().then((snapshot) => {
// // //when we have the data
// // console.log(snapshot.doc[0].data());
// //}).catch(err => console.log(err));

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore, collection

// } from 'firebase/firestore'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA_t4Z0TpDszczw7gG6aUx-P8aWZES67lU",
//   authDomain: "javascript-8.firebaseapp.com",
//   projectId: "javascript-8",
//   storageBucket: "javascript-8.appspot.com",
//   messagingSenderId: "969098489362",
//   appId: "1:969098489362:web:4a74dfc0acea67ad3bb2cb",
//   measurementId: "G-CNC1CNE817"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

//init services
//const db = getFirestore()

//init services
// const db = getFirestore()

// //collect ref
// const colRef = collection(db, 'javascript')
//collect ref
//  const colRef = collection(db, 'javascript')

//  //get collection data
// getDocs(colRef)
//  .then((snapshot) => {
//   console.log(snapshot.docs)
//  })


//const colRef = collection(db, 'food')

// const docRef = async () => {

//   const doc =  getDocs(collection(db, "food")).then((snapshot) => {
//   //when we have the data
//       console.log(snapshot);
//     }).catch(err => console.log(err));
// }
//     const docRef = async () => {

//   const querySnapshot = await getDocs(collection(db, "food"));
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${doc.data()}`);
//   });

// }