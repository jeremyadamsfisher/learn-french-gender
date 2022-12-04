import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD3ZfMhCaZ2KNfynDdP08oNT2B2zsP708Y",
  authDomain: "manray-ai.firebaseapp.com",
  projectId: "manray-ai",
  storageBucket: "manray-ai.appspot.com",
  messagingSenderId: "951985350262",
  appId: "1:951985350262:web:44f53ad436fb92b658e157"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };