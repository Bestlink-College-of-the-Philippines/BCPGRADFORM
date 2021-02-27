import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBf3mnrvbTUryLXpbVNFH3cPhMYyiN94x4",
    authDomain: "bcp-graduation-form.firebaseapp.com",
    databaseURL: "https://bcp-graduation-form-default-rtdb.firebaseio.com",
    projectId: "bcp-graduation-form",
    storageBucket: "bcp-graduation-form.appspot.com",
    messagingSenderId: "793353167434",
    appId: "1:793353167434:web:9ed488840259090d02bcb3",
    measurementId: "G-6PPH48XZ01"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();