import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAtkd1rTn7Zvqq6NX0l9pqTQsUnKnFBRX0",
    authDomain: "olxproject-67c83.firebaseapp.com",
    projectId: "olxproject-67c83",
    storageBucket: "olxproject-67c83.appspot.com",
    messagingSenderId: "1009311188482",
    appId: "1:1009311188482:web:ae22d4d167c4aa9b6ac91b",
    measurementId: "G-MSQPHNLXWS"
  };

  export default firebase.initializeApp(firebaseConfig)