import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCjXOgGO2vH_jMSh62P1CbwVzm3TJyoBBw",
  authDomain: "sfr-print-portal.firebaseapp.com",
  projectId: "sfr-print-portal",
  storageBucket: "sfr-print-portal.firebasestorage.app",
  messagingSenderId: "516576744106",
  appId: "1:516576744106:web:96df61e3270658e17cb6d3",
};

const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;