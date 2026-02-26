import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3lYDIr8ElAWk-jwnOWxubtVS-TeSSyOg",
  authDomain: "uyguy-ab047.firebaseapp.com",
  projectId: "uyguy-ab047",
  storageBucket: "uyguy-ab047.firebasestorage.app",
  messagingSenderId: "297739792713",
  appId: "1:297739792713:web:72af3ba75fabcacb3caa98"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
