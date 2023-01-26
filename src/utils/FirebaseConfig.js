// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCifsfjNUZRUUnc55y370-d5TKA4p5IF14",
  authDomain: "roboot-a1329.firebaseapp.com",
  projectId: "roboot-a1329",
  storageBucket: "roboot-a1329.appspot.com",
  messagingSenderId: "525487975968",
  appId: "1:525487975968:web:66a065e840b793cce11645",
  measurementId: "G-6KF072ZZW2",
};
 
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
