import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.FIREBASE_DATABASE_URL,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID, 
// };


const firebaseConfig = {
  apiKey: "AIzaSyBSpbvkMCUzZufvEj9hZUsrje8t6mI1rsU",
  authDomain: "firebasic-c895e.firebaseapp.com",
  databaseURL: "https://firebasic-c895e-default-rtdb.firebaseio.com",
  projectId: "firebasic-c895e",
  storageBucket: "firebasic-c895e.appspot.com",
  messagingSenderId: "781953154878",
  appId: "1:781953154878:web:e02dd3715ba3ef6041766f",
  measurementId: "G-ZFLSKYY32C"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth
};