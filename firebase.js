// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV__ueNQi4fO7Zks9KWz_NWn_1hFTtf98",
  authDomain: "inventory-tracker-dbe6f.firebaseapp.com",
  projectId: "inventory-tracker-dbe6f",
  storageBucket: "inventory-tracker-dbe6f.appspot.com",
  messagingSenderId: "387081289528",
  appId: "1:387081289528:web:bf59a7265c5bdc49c20bcd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
