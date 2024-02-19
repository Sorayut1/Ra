import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCvnps-YwN0R_z5eYDVY8zKOp2yWG9nFQE",
  authDomain: "react-native-crud-1fa74.firebaseapp.com",
  projectId: "react-native-crud-1fa74",
  storageBucket: "react-native-crud-1fa74.appspot.com",
  messagingSenderId: "813448679406",
  appId: "1:813448679406:web:b9f4917841c8d1d17088ff",
  measurementId: "G-F7FKB19ZK8"
};

if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export { firebase };