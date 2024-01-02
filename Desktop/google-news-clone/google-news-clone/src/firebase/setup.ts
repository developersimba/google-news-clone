import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyA12kEP7CTMS5VdvJdhDwO97MsmToMCLmE",
  authDomain: "news-clone-a6fe8.firebaseapp.com",
  projectId: "news-clone-a6fe8",
  storageBucket: "news-clone-a6fe8.appspot.com",
  messagingSenderId: "38026605612",
  appId: "1:38026605612:web:a9beeaf6f6c0430a6acd89"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()