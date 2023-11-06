// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyASVFqULVlq6Mgnq9wmg6mipcTAx-cmk64",
    authDomain: "linkedin-clone-6f226.firebaseapp.com",
    projectId: "linkedin-clone-6f226",
    storageBucket: "linkedin-clone-6f226.appspot.com",
    messagingSenderId: "220974177887",
    appId: "1:220974177887:web:f6d13227e32090b9b345ea",
    measurementId: "G-SB394SHZ7P"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // Use these for db & auth
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { auth, db };




