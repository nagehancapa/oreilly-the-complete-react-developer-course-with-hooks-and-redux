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

// child_removed
database.ref("expenses").on("child_removed", (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref("expenses").on("child_changed", (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref("expenses").on("child_added", (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// database.ref("expenses").on("value", (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
//   console.log(expenses);
// });

// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });
//     console.log(expenses);
//   });

database.ref("expenses").push({
  description: "Rent",
  note: "",
  amount: 109500,
  createdAt: 976123498763,
});

// database.ref("notes/-MdvtJcwYNOBAnsmdotB").remove();

// database.ref("notes").push({
//   title: "Course Topics",
//   body: "React Native, Angular, Python",
// });

// database.ref().on("value", (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// database
//   .ref()
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log("Error fetching data", e);
//   });

// database
//   .ref()
//   .set({
//     name: "nagehan capa",
//     age: 33,
//     stressLevel: 6,
//     job: {
//       title: "Software developer",
//       company: "Google",
//     },
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

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle",
// });

// database
//   .ref("isSingle")
//   .remove()
//   .then(() => {
//     console.log("Remove succeeded.");
//   })
//   .catch((error) => {
//     console.log("Remove failed: " + error.message);
//   });
