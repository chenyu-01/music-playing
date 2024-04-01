// src/stores/user.js
import { auth, db } from '@/includes/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { defineStore } from 'pinia'
export default defineStore('user', {
  state: () => ({
    userLoggedIn: false,
  }),
  actions: {
    async register(values) {
      const userCredential = await createUserWithEmailAndPassword(
        values.email,
        values.password
      )
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        name: values.name,
        email: values.email,
        age: values.age,
        country: values.country,
      })
      await updateProfile(userCredential.user, {
        displayName: values.name,
      })
      this.userLoggedIn = true
    },
    async login(values) {
      // login logic
      await signInWithEmailAndPassword(auth, values.email, values.password)
      this.userLoggedIn = true
    },
    async logout() {
      // logout logic
      await signOut(auth)
      this.userLoggedIn = false
    },
  },
})
