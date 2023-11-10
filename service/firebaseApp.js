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
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
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
  return serverTimestamp();
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