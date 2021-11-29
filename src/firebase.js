import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCv6DfE6oyIjdCi3-sZO4mJnwsv-yGFtM8",
  authDomain: "its-my-birthday-6235a.firebaseapp.com",
  projectId: "its-my-birthday-6235a",
  storageBucket: "its-my-birthday-6235a.appspot.com",
  messagingSenderId: "815048848346",
  appId: "1:815048848346:web:c22a254bc8dd0508e0c6e3",
  measurementId: "G-V469DPF7PZ"
});

const db = firebaseConfig.firestore();
const auth = firebaseConfig.auth();
const storage = firebaseConfig.storage();

export { db, auth, storage };