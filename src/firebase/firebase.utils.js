import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD_6-GX-WaTVl-8-YdYlAwgrAfW_uG30Xc",
    authDomain: "evoli-2127a.firebaseapp.com",
    databaseURL: "https://evoli-2127a.firebaseio.com",
    projectId: "evoli-2127a",
    storageBucket: "evoli-2127a.appspot.com",
    messagingSenderId: "435584694803",
    appId: "1:435584694803:web:57e4857d099c71bd9e1de6",
    measurementId: "G-3YTBM7FCG4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;