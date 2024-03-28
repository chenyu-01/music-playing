import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyCe4xspiouuwD3oN8spYSnLZGNrEAw1i78',
  authDomain: 'music-4a433.firebaseapp.com',
  projectId: 'music-4a433',
  storageBucket: 'music-4a433.appspot.com',
  appId: '1:189242395273:web:688ec4d0eef69b76171458',
}

firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const db = firebase.firestore()
const usersCollection = db.collection('users')
export { auth, db, usersCollection }