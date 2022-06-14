// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// sign-in with google
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// connect to firestore
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwll7lpAOQWWzjzamkoWrKeut0O7XwMt4",
  authDomain: "sign-in-61af9.firebaseapp.com",
  projectId: "sign-in-61af9",
  storageBucket: "sign-in-61af9.appspot.com",
  messagingSenderId: "980905252765",
  appId: "1:980905252765:web:f15a38ee470490d7760174",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", "userAuth.uid");
  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};
