// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHeAmomalcIRiOvk8fw4k9XG0ZsooQrF8",
  authDomain: "espenses-64f03.firebaseapp.com",
  projectId: "espenses-64f03",
  storageBucket: "espenses-64f03.appspot.com",
  messagingSenderId: "236234675676",
  appId: "1:236234675676:web:cb366a80c6b41d10ed2b19",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
