import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC9A3kIBFxNLnAy2_ng1QZORMo53Prl23Q",
  authDomain: "netflix-clone-app-1b0da.firebaseapp.com",
  projectId: "netflix-clone-app-1b0da",
  storageBucket: "netflix-clone-app-1b0da.appspot.com",
  messagingSenderId: "529259505448",
  appId: "1:529259505448:web:9ab455da9893b5ac53921d",
  measurementId: "G-K29BV5RR67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fireBaseAuth = getAuth(app);