import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHeAmomalcIRiOvk8fw4k9XG0ZsooQrF8",
  authDomain: "espenses-64f03.firebaseapp.com",
  projectId: "espenses-64f03",
  storageBucket: "espenses-64f03.appspot.com",
  messagingSenderId: "236234675676",
  appId: "1:236234675676:web:cb366a80c6b41d10ed2b19",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
