// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection, addDoc,getDocs  } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPaMVc7V1k8g_ubKbWKVg3dX71Dmk-o8s",
    authDomain: "midosoft-5cc00.firebaseapp.com",
    databaseURL: "https://midosoft-5cc00-default-rtdb.firebaseio.com",
    projectId: "midosoft-5cc00",
    storageBucket: "midosoft-5cc00.appspot.com",
    messagingSenderId: "938238374102",
    appId: "1:938238374102:web:4bc0ad1ca10b1b4701d977"};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { getFirestore,collection, addDoc,db,app,getDocs  }