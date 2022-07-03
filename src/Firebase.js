import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyABuhJmBO1ccmP_W6isPdgbvlE8Jn6RQUU",
  authDomain: "nclone-943d4.firebaseapp.com",
  projectId: "nclone-943d4",
  storageBucket: "nclone-943d4.appspot.com",
  messagingSenderId: "636334981709",
  appId: "1:636334981709:web:9b4ccef2434f23ce1d9204",
  measurementId: "G-X6VXMJV4G3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);