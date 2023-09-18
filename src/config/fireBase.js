import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAQzTbVllPYleqY6gjxel3Lx1WB-ItfPAU",
  authDomain: "contact-app-c63da.firebaseapp.com",
  databaseURL:
    "https://contact-app-c63da-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "contact-app-c63da",
  storageBucket: "contact-app-c63da.appspot.com",
  messagingSenderId: "1009073205902",
  appId: "1:1009073205902:web:7da540ca225f076acc4fdf",
  measurementId: "G-NH42TMHDW4",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {analytics}

export default app;