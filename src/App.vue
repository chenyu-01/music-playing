<template>
  <AppHeader></AppHeader>
  <!-- Introduction -->
  <section class="relative mb-8 py-20 text-center text-white">
    <div
      class="introduction-bg absolute inset-0 h-full w-full bg-contain"
      style="background-image: url(assets/img/header.png)"
    ></div>
    <div class="container mx-auto">
      <div class="main-header-content text-white">
        <h1 class="mb-5 text-5xl font-bold">Listen to Great Music!</h1>
        <p class="mx-auto w-full md:w-8/12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et
          dolor mollis, congue augue non, venenatis elit. Nunc justo eros,
          suscipit ac aliquet imperdiet, venenatis et sapien. Duis sed magna
          pulvinar, fringilla lorem eget, ullamcorper urna.
        </p>
      </div>
    </div>

    <img
      class="relative mx-auto -mb-20 mt-5 block w-auto max-w-full"
      src="/assets/img/introduction-music.png"
      alt="Music"
    />
  </section>

  <!-- Main Content -->
  <section class="container mx-auto">
    <div class="relative flex flex-col rounded border border-gray-200 bg-white">
      <div class="border-b border-gray-200 px-6 pb-5 pt-6 font-bold">
        <span class="card-title">Songs</span>
        <!-- Icon -->
        <i class="fa fa-headphones-alt float-right text-xl text-green-400"></i>
      </div>
      <!-- Playlist -->
      <ol id="playlist">
        <li
          class="flex cursor-pointer items-center justify-between p-3 pl-6 transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="block font-bold text-gray-600">Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex cursor-pointer items-center justify-between p-3 pl-6 transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="block font-bold text-gray-600">Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex cursor-pointer items-center justify-between p-3 pl-6 transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="block font-bold text-gray-600">Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex cursor-pointer items-center justify-between p-3 pl-6 transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="block font-bold text-gray-600">Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex cursor-pointer items-center justify-between p-3 pl-6 transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="block font-bold text-gray-600">Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex cursor-pointer items-center justify-between p-3 pl-6 transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="block font-bold text-gray-600">Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex cursor-pointer items-center justify-between p-3 pl-6 transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="block font-bold text-gray-600">Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex cursor-pointer items-center justify-between p-3 pl-6 transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="block font-bold text-gray-600">Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex cursor-pointer items-center justify-between p-3 pl-6 transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="block font-bold text-gray-600">Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex cursor-pointer items-center justify-between p-3 pl-6 transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="block font-bold text-gray-600">Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex cursor-pointer items-center justify-between p-3 pl-6 transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="block font-bold text-gray-600">Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex cursor-pointer items-center justify-between p-3 pl-6 transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="block font-bold text-gray-600">Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex cursor-pointer items-center justify-between p-3 pl-6 transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="block font-bold text-gray-600">Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
      </ol>
      <!-- .. end Playlist -->
    </div>
  </section>

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
