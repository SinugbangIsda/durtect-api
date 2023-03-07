// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOfQ_yreH-TB1awDdkmiin_X5RvQ5RWHE",
  authDomain: "durtect-auth.firebaseapp.com",
  databaseURL: "https://durtect-auth-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "durtect-auth",
  storageBucket: "durtect-auth.appspot.com",
  messagingSenderId: "684650220636",
  appId: "1:684650220636:web:6985f61ed8298c38826a99",
  measurementId: "G-WSVGKFYV3N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);