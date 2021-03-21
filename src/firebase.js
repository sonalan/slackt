import firebase from "firebase";

const firebaseConfig = {
    apiKey: "your_api_key",
    authDomain: "your_auth_domain",
    projectId: "your_project_id",
    storageBucket: "your_storage_bucket",
    messagingSenderId: "messaging_sender_id",
    appId: "your_app_Id"
  }; 

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore(); 

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
