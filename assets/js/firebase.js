// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//importación para obetner datos firestore
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"; 

//import credeciales.js
import { firebaseConfig } from "./credenciales.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);     //exportación a fire store 
