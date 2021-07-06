import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA1151RrovAWRyw5lFXrosr0IC2SrgzwfM",
  authDomain: "expensify-8894b.firebaseapp.com",
  databaseURL:
    "https://expensify-8894b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "expensify-8894b",
  storageBucket: "expensify-8894b.appspot.com",
  messagingSenderId: "587365140662",
  appId: "1:587365140662:web:99f49a70c6728b231f3e17",
  measurementId: "G-X1LG30601S",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// database
//   .ref()
//   .set({
//     name: "nagehan capa",
//     age: 33,
//     isSingle: false,
//     location: {
//       city: "Eindhoven",
//       country: "Netherlands",
//     },
//   })
//   .then(() => {
//     console.log("Data is saved!");
//   })
//   .catch((e) => {
//     console.log("This failed.", e);
//   });

database
  .ref("isSingle")
  .remove()
  .then(() => {
    console.log("Remove succeeded.");
  })
  .catch((error) => {
    console.log("Remove failed: " + error.message);
  });
