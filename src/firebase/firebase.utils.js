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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
