// Import the functions you need from the SDKs you need

const  {getAuth } = require("firebase/auth") 
const { initializeApp } = require( "firebase/app")
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWP4CRkojMnboqre8RQ4TFwxFbw5dlOqk",
  authDomain: "dixa-f7e33.firebaseapp.com",
  projectId: "dixa-f7e33",
  storageBucket: "dixa-f7e33.appspot.com",
  messagingSenderId: "103223168386",
  appId: "1:103223168386:web:a80de6f8eb8a7dcbd6139b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 module.exports = {auth,app};