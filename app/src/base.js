import { initializeApp } from "firebase/app";
import 'firebase/storage';
import { getStorage, ref } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBqsp-OZKbz0I4XhCsIfJDzCrGHTg-kb5I",
  authDomain: "job-basket-343400.firebaseapp.com",
  projectId: "job-basket-343400",
  storageBucket: "job-basket-343400.appspot.com",
  messagingSenderId: "278073956798",
  appId: "1:278073956798:web:5a385d44cefe45d17241ef",
  measurementId: "G-YXYQVMK5M5"
};


// Initialize Firebase

export const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);
export const storageRef = ref(storage);
