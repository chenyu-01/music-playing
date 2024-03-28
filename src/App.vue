<template>
  <AppHeader></AppHeader>
  <RouterView></RouterView>
  <!-- Player -->
  <div class="fixed bottom-0 left-0 w-full bg-white px-4 py-2">
    <!-- Track Info -->
    <div class="text-center">
      <span class="song-title font-bold">Song Title</span> by
      <span class="song-artist">Artist</span>
    </div>
    <div class="flex flex-nowrap items-center gap-4">
      <!-- Play/Pause Button -->
      <button type="button">
        <i class="fa fa-play text-xl text-gray-500"></i>
      </button>
      <!-- Current Position -->
      <div class="player-currenttime">00:00</div>
      <!-- Scrub Container  -->
      <div class="relative h-2 w-full cursor-pointer rounded bg-gray-200">
        <!-- Player Ball -->
        <span
          class="absolute -top-2.5 -ml-2.5 text-lg text-gray-800"
          style="left: 50%"
        >
          <i class="fas fa-circle"></i>
        </span>
        <!-- Player Progress Bar-->
        <span
          class="block h-2 rounded bg-gradient-to-r from-green-500 to-green-400"
          style="width: 50%"
        ></span>
      </div>
      <!-- Duration -->
      <div class="player-duration">03:06</div>
    </div>
  </div>

  <AppAuth></AppAuth>
</template>

<script>
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

<style lang="scss" scoped></style>
