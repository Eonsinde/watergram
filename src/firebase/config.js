import firebase from 'firebase/app';
import 'firebase/storage'; // to store our images
import 'firebase/firestore'; // our DB


var firebaseConfig = {
    apiKey: "AIzaSyDQgi8gQnV45IyD3VW6WnWtaSe4cXZnXCA",
    authDomain: "scrotch-watergram.firebaseapp.com",
    projectId: "scrotch-watergram",
    storageBucket: "scrotch-watergram.appspot.com",
    messagingSenderId: "261501698055",
    appId: "1:261501698055:web:2c51deae55ea4f2bbfaaa2",
    measurementId: "G-K7LJ8NSGX0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
