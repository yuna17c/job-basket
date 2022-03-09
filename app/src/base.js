import { initializeApp } from "firebase/app";
import 'firebase/storage';
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
 /*
  apiKey: ,

  authDomain: ,

  projectId: ,

  storageBucket: ,

  messagingSenderId: ,

  appId: ,

  measurementId:
*/
};


// Initialize Firebase

export const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);
export const storageRef = ref(storage);