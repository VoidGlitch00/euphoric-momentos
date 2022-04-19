// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDghJHiG2yzG5JqsNspWOuasgyTD695Dro",
  authDomain: "euphoric-momentos-d3016.firebaseapp.com",
  projectId: "euphoric-momentos-d3016",
  storageBucket: "euphoric-momentos-d3016.appspot.com",
  messagingSenderId: "46722573520",
  appId: "1:46722573520:web:a1ef99056fca07effa2ad5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;