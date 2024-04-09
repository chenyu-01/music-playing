<template>
  <AppHeader></AppHeader>
  <RouterView v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </RouterView>
  <AppPlayer></AppPlayer>

  <AppAuth></AppAuth>
</template>

<script>
import AppPlayer from './components/AppPlayer.vue'
import AppHeader from './components/AppHeader.vue'
import AppAuth from './components/AppAuth.vue'
import { mapWritableState } from 'pinia'
import useUserStore from './stores/user'
import { auth } from './includes/firebase'
export default {
  name: 'App',
  components: {
    AppHeader,
    AppAuth,
    AppPlayer,
  },
  computed: {
    ...mapWritableState(useUserStore, ['userLoggedIn']),
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true
    }
  },
}
</script>

<style>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.5s linear;
}
.fade-enter-to {
  transition: all 0.5s linear;
  opacity: 1;
}
</style>
