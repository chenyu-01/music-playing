import { defineStore } from 'pinia'

export default defineStore('modal', {
  state: () => ({
    isOpen: false,
  }),
  getters: {
    hiddenClass() {
      return this.isOpen ? '' : 'hidden'
    },
  },
})
