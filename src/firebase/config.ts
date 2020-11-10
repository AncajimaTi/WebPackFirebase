import firebase from 'firebase/app'
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBWWhLy4MwGtPnVy4RwOfmpCh5UefdWkuM",
    authDomain: "sql-demos-c9b85.firebaseapp.com",
    databaseURL: "https://sql-demos-c9b85.firebaseio.com",
    projectId: "sql-demos-c9b85",
    storageBucket: "sql-demos-c9b85.appspot.com",
    messagingSenderId: "555010386653",
    appId: "1:555010386653:web:78986d392b03dc3016c934",
    measurementId: "G-FG9L9THRM7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log('firebase configurado');

  export default firebase.firestore();