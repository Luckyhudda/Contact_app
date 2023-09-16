// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQzTbVllPYleqY6gjxel3Lx1WB-ItfPAU",
  authDomain: "contact-app-c63da.firebaseapp.com",
  projectId: "contact-app-c63da",
  storageBucket: "contact-app-c63da.appspot.com",
  messagingSenderId: "1009073205902",
  appId: "1:1009073205902:web:7da540ca225f076acc4fdf",
  measurementId: "G-NH42TMHDW4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firebase = getAnalytics(app);
