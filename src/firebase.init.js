// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCnVQYEy0rj9Ow3kYtDBdEwuMDBSvidlZ8",
    authDomain: "fir-practice-6c066.firebaseapp.com",
    projectId: "fir-practice-6c066",
    storageBucket: "fir-practice-6c066.appspot.com",
    messagingSenderId: "333746246692",
    appId: "1:333746246692:web:740e1e2c0022a51a0774b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export default app;