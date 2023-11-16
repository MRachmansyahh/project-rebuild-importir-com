import { initializeApp } from "firebase/app";
import {
  serverTimestamp,
  getFirestore,
  doc,
  setDoc,
  getDocs
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBtxAx2nFO5fFZYQDqhZE_i6sATZnCBaQ",
  authDomain: "importir-com-5657a.firebaseapp.com",
  databaseURL: "https://importir-com-5657a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "importir-com-5657a",
  storageBucket: "importir-com-5657a.appspot.com",
  messagingSenderId: "186957587992",
  appId: "1:186957587992:web:0762ad2e62c1ea6cf5c56d",
  measurementId: "G-WZXRL6JZ9T"
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

export const SignUp = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
}

export const SignIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
  return auth.currentUser.email;
}

export const SignOut = async () => {
  await signOut(auth);
  return auth.currentUser.email;
}

export const GetSignInErrorMessage = (code) => {
  switch (code) {
    case 'auth/user-not-found':
      return 'User Not Registered'
    case 'auth/wrong-password':
    default:
      return 'Enter your email and password correctly'
  }
}

export const GetSignUpErrorMessage = (code) => {
  switch (code) {
    case 'auth/email-already-in-use':
      return 'Email already registered.'
    default:
      return 'Error while registering. Please try again.'
  }
}

export const SetDocument = async (path, data) => {
  await setDoc(doc(db, path), data);
}

export const GetDocument = async (path) => {
  const docRef = doc(db, path);
  const docSnap = await getDocs(docRef);
  return docSnap;
}

export const GetTimestamp = () => {
  const currentTimestamp = new Date();
  return currentTimestamp;
}


export const isUserLoggedIn = (callback) => {
  onAuthStateChanged(auth, (user));
  if (user) {
    callback(true, user);
  } else {
    callback(false, null);
  }
}


export default firebaseApp