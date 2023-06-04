import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAgKOvPqz7CRwiuAru960_uMv2MHUS2XeU",
    authDomain: "vips-messenger-app.firebaseapp.com",
    projectId: "vips-messenger-app",
    storageBucket: "vips-messenger-app.appspot.com",
    messagingSenderId: "461431827401",
    appId: "1:461431827401:web:6ecfed553b4a12c6a65618",
    measurementId: "G-J8NGQSKZZ1"
});

const db = firebaseApp.firestore();

export default db;
