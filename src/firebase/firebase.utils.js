import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDS2Kal1zIAhb75B_0Qx44BZvCgbVBWUro",
  authDomain: "itkl-799ca.firebaseapp.com",
  databaseURL: "https://itkl-799ca.firebaseio.com",
  projectId: "itkl-799ca",
  storageBucket: "itkl-799ca.appspot.com",
  messagingSenderId: "19765427118",
  appId: "1:19765427118:web:bd3f2c10ed280e62dae63f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export firestore
export const firestore = firebase.firestore();
