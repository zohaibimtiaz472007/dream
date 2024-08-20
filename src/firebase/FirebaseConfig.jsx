// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGbqeOmeneDfFpraF97_hZPcO9OMHYUAg",
  authDomain: "e-shop-5af93.firebaseapp.com",
  projectId: "e-shop-5af93",
  storageBucket: "e-shop-5af93.appspot.com",
  messagingSenderId: "845230469824",
  appId: "1:845230469824:web:2ae4fe66ca4302f6ddb325"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app); // Initialize Storage


export { fireDB, auth, storage }
