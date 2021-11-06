import * as firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase';
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC2RhKdFKtROZQCrHvCjShEXg_3IFe5lts",
    authDomain: "instafire-95795.firebaseapp.com",
    projectId: "instafire-95795",
    storageBucket: "instafire-95795.appspot.com",
    messagingSenderId: "687899603606",
    appId: "1:687899603606:web:d53988c829f6229f1ac8b7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = app.firestore();

  export { projectStorage, projectFirestore };