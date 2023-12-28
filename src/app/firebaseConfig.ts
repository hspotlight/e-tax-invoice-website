// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAIhkDZJpBLgElPJGCJ3XxWS6JrSrWw4vo",
    authDomain: "e-tax-invoice-d6491.firebaseapp.com",
    projectId: "e-tax-invoice-d6491",
    storageBucket: "e-tax-invoice-d6491.appspot.com",
    messagingSenderId: "806884875515",
    appId: "1:806884875515:web:7e8b11f4babf97bc14245e",
    measurementId: "G-ZYBXGYX0WB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics and get a reference to the service
const analytics = getAnalytics(app);

export default analytics;