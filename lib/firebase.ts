import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnTiUapiRf-Gl5PZ2-EbRc0RdkIInltgo",
  authDomain: "nexus-saas-dashboard.firebaseapp.com",
  projectId: "nexus-saas-dashboard",
  storageBucket: "nexus-saas-dashboard.firebasestorage.app",
  messagingSenderId: "44317123967",
  appId: "1:44317123967:web:04fede75eef09e3e69a64a",
  measurementId: "G-YDQFN860QJ"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);