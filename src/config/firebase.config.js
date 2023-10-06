import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAv-dilH3N1i_HdaEjRvMKudnVhXaWuCM",
  authDomain: "ai-note-b0165.firebaseapp.com",
  projectId: "ai-note-b0165",
  storageBucket: "ai-note-b0165.appspot.com",
  messagingSenderId: "812678848506",
  appId: "1:812678848506:web:55b03138ac8d6f5a0fce43"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firebaseAuth = getAuth(app);
const firestoreDB = getFirestore(app);

export { app, firebaseAuth, firestoreDB };
