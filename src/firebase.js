import firebase from "firebase/app"
import 'firebase/firestore'

// noinspection SpellCheckingInspection,SpellCheckingInspection,SpellCheckingInspection,SpellCheckingInspection
const firebaseConfig = firebase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: "iit-indore-sports-website.firebaseapp.com",
    projectId: "iit-indore-sports-website",
    storageBucket: "iit-indore-sports-website.appspot.com",
    messagingSenderId: "51687276727",
    appId: "1:51687276727:web:bab9079b3f5201e8c48d32",
    measurementId: "G-GVMQM968QE"
})

export default firebaseConfig