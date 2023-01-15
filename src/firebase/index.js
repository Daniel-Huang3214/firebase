import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA9ONZA6blR_6Ne-TDT5rEiK1HTDra6lg4",
  authDomain: "ics4u-643b3.firebaseapp.com",
  projectId: "ics4u-643b3",
  storageBucket: "ics4u-643b3.appspot.com",
  messagingSenderId: "554718882970",
  appId: "1:554718882970:web:3cdde4ff0470b09a854323"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const firestore = getFirestore();
const storage = getStorage();

export { auth, firestore, storage }