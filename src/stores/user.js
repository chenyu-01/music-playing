// src/stores/user.js
import { auth, usersCollection } from '@/includes/firebase'
import { defineStore } from 'pinia'
export default defineStore('user', {
  state: () => ({
    userLoggedIn: false,
  }),
  actions: {
    async register(values) {
      const userCredential = await auth.createUserWithEmailAndPassword(
        values.email,
        values.password
      )
      await usersCollection.doc(userCredential.user.uid).set({
        name: values.name,
        email: values.email,
        age: values.age,
        country: values.country,
      })
      await userCredential.user.updateProfile({
        displayName: values.name,
      })
      this.userLoggedIn = true
    },
    async login(values) {
      // login logic
      await auth.signInWithEmailAndPassword(values.email, values.password)
      this.userLoggedIn = true
    },
    async logout() {
      // logout logic
      await auth.signOut()
      this.userLoggedIn = false
    },
  },
})
