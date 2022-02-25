import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBelT2e8h_TaCpd-z6_SSgJXlZdPTnZfw8",
  authDomain: "cashflow-34ad5.firebaseapp.com",
  projectId: "cashflow-34ad5",
  storageBucket: "cashflow-34ad5.appspot.com",
  messagingSenderId: "1096255544451",
  appId: "1:1096255544451:web:2f819db1bfb0d907b7cfb6"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.Timestamp

export { projectFirestore, projectAuth, timestamp }