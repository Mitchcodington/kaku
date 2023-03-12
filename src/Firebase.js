// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ2Nn0--Kckk1TODBXumMv0tO0Dx9l8mM",
  authDomain: "kaku-331f0.firebaseapp.com",
  projectId: "kaku-331f0",
  storageBucket: "kaku-331f0.appspot.com",
  messagingSenderId: "491491309483",
  appId: "1:491491309483:web:63dea83fcb052927dbc4ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app