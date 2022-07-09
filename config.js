import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJ7n3Dgog1Q4F3cI8lfjc-63Gl9Cy6Od8",
    authDomain: "pro-c78-e-ride-stage-4-55ab9.firebaseapp.com",
    projectId: "pro-c78-e-ride-stage-4-55ab9",
    storageBucket: "pro-c78-e-ride-stage-4-55ab9.appspot.com",
    messagingSenderId: "986889133496",
    appId: "1:986889133496:web:2d81b97671cfe5cee8834d"
  };
  

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


