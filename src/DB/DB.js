import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

console.log(import.meta.env);
console.log("API_KEY:", import.meta.env.VITE_API_KEY);
console.log("AUTH_DOMAIN:", import.meta.env.VITE_AUTH_DOMAIN);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export const auth = getAuth(app);

export default db;
