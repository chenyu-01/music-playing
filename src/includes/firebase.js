// ~/src/includes/firebase.js
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, collection } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCe4xspiouuwD3oN8spYSnLZGNrEAw1i78',
  authDomain: 'music-4a433.firebaseapp.com',
  projectId: 'music-4a433',
  storageBucket: 'music-4a433.appspot.com',
  appId: '1:189242395273:web:688ec4d0eef69b76171458',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize services
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

// Access Firestore collections
const usersCollection = collection(db, 'users')
const songsCollection = collection(db, 'songs')

export { auth, db, usersCollection, storage, songsCollection }
