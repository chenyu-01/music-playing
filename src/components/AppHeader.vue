<template>
  <!-- Header -->
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex items-center justify-start px-4 py-5">
      <!-- App Name -->
      <RouterLink
        class="mr-4 text-2xl font-bold uppercase text-white"
        :to="{ name: 'home' }"
        exact-active-class="no-active"
      >
        Music
      </RouterLink>

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="mt-1 flex flex-row">
          <!-- Navigation Links -->
          <li>
            <RouterLink class="px-2 text-white" :to="{ name: 'about' }"
              >About</RouterLink
            >
          </li>
          <li v-if="!userStore.userLoggedIn">
            <a class="px-2 text-white" href="#" @click.prevent="toggleAuthModal"
              >Login / Register</a
            >
          </li>
          <template v-else>
            <li>
              <RouterLink class="px-2 text-white" :to="{ name: 'manage' }"
                >Manage</RouterLink
              >
            </li>
            <li>
              <a class="px-2 text-white" href="#" @click.prevent="signOut"
                >Logout</a
              >
            </li>
          </template>
        </ul>
        <ul class="ml-auto">
          <li>
            <a class="px-2 text-white" href="#" @click.prevent="changeLocale">{{
              currentLocale
            }}</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapStores } from 'pinia'
import useModalStore from '@/stores/modal'
import useUserStore from '@/stores/user'
export default {
  name: 'AppHeader',
  computed: {
    ...mapStores(useModalStore, useUserStore),
    currentLocale() {
      return this.$i18n.locale === 'en' ? 'English' : 'Chinese'
    },
  },
  methods: {
    toggleAuthModal() {
      this.modalStore.isOpen = !this.modalStore.isOpen
    },
    signOut() {
      this.userStore.logout()
      if (this.$route.meta.requiresAuth !== true) {
        this.$router.push({ name: 'home' })
      }
    },
    changeLocale() {
      if (this.currentLocale === 'English') {
        this.$i18n.locale = 'cn'
      } else {
        this.$i18n.locale = 'en'
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
