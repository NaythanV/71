import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBPgLrgaQTGX1_n3Q7d9sQ_KWuXSDjDB2Q",
  authDomain: "c71-project-56148.firebaseapp.com",
  projectId: "c71-project-56148",
  storageBucket: "c71-project-56148.appspot.com",
  messagingSenderId: "1060404380651",
  appId: "1:1060404380651:web:955e826946746c059c4fae"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
