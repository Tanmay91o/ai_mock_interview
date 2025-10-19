
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD1bNz3ESIUlw4jHcBp8Tg5KWy9zMeFyKg",
    authDomain: "prepwise-f5710.firebaseapp.com",
    projectId: "prepwise-f5710",
    storageBucket: "prepwise-f5710.firebasestorage.app",
    messagingSenderId: "104494968737",
    appId: "1:104494968737:web:f2ae9d4bc756a72179e5e0",
    measurementId: "G-HP57LF977V"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app)
export const db = getFirestore(app)