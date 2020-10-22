import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDsrsJkimUIkQVZ_Npf11vGB_eAWg7KNtk",
  authDomain: "fb-mern-clone.firebaseapp.com",
  databaseURL: "https://fb-mern-clone.firebaseio.com",
  projectId: "fb-mern-clone",
  storageBucket: "fb-mern-clone.appspot.com",
  messagingSenderId: "634457834792",
  appId: "1:634457834792:web:91bc72005a10e923bdbc1d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
