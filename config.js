import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB4hADY3fDxIYLTCjQv6YES5-wuR3NJ3Sw",
  authDomain: "byjus-project-homework.firebaseapp.com",
  projectId: "byjus-project-homework",
  storageBucket: "byjus-project-homework.appspot.com",
  messagingSenderId: "519892089892",
  appId: "1:519892089892:web:dbc8446538cc34e15bacb1"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
