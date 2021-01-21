import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCIUelbq5UsEBrFqT1rls-IfcBAsOHRGY8",
  authDomain: "clone-d41cd.firebaseapp.com",
  projectId: "clone-d41cd",
  storageBucket: "clone-d41cd.appspot.com",
  messagingSenderId: "843922873361",
  appId: "1:843922873361:web:b3bf1db8a1af7e641465b0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth, firebaseApp };
