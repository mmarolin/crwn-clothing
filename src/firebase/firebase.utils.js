import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDbnfDp6Gc1Vi9sNZE0dP4ORaYBN9hT13M",
  authDomain: "crwn-clothing-d37e5.firebaseapp.com",
  projectId: "crwn-clothing-d37e5",
  storageBucket: "crwn-clothing-d37e5.appspot.com",
  messagingSenderId: "105060388913",
  appId: "1:105060388913:web:efcd0e5bddcd789de9c510",
  measurementId: "G-WE4M4CS8XV",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
