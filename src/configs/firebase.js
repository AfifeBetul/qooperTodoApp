import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC0YiLxHyhvckuVDpHW6gCt59oRSw1aL0c",
  authDomain: "qoopertodoafife.firebaseapp.com",
  databaseURL: "https://qoopertodoafife-default-rtdb.firebaseio.com/",
  projectId: "qoopertodoafife",
  storageBucket: "qoopertodoafife.appspot.com",
  messagingSenderId: "868129165672",
  appId: "1:868129165672:web:a1437807926e15da7146dd",
};

// Initialize Firebase
try {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
  console.log("Firebase is Initialized");
} catch (err) {
  console.log("Error Initializing Firebase");
}

export default firebase;
