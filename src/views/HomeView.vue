<template>
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
      <div
        class="border-b border-gray-200 px-6 pb-5 pt-6 font-bold"
        v-icon.right.yellow="'headphones-alt'"
      >
        <span class="card-title">Songs</span>
        <!-- Icon -->
      </div>
      <!-- Playlist -->
      <ol id="playlist">
        <AppSongItem v-for="song in songs" :key="song.docID" :song="song" />
      </ol>
      <!-- .. end Playlist -->
    </div>
  </section>
</template>

<script>
import AppSongItem from '@/components/SongItem.vue'
import IconSecondary from '@/directives/icon-secondary.js'
import { songsCollection } from '@/includes/firebase'
import { getDocs } from 'firebase/firestore'
export default {
  name: 'HomeView',
  directives: IconSecondary,
  components: {
    AppSongItem,
  },
  data() {
    return {
      songs: [],
    }
  },
  created() {
    this.getSongs()
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    async getSongs() {
      const snapshots = await getDocs(songsCollection)
      snapshots.forEach((doc) => {
        this.songs.push({
          docID: doc.id,
          ...doc.data(),
        })
      })
    },
    handleScroll() {
      const { scrollTop, offsetHeight } = document.documentElement
      const { innerHeight } = window
      const bottomOfWindow =
        Math.round(scrollTop) + innerHeight === offsetHeight
      if (bottomOfWindow) {
        console.log('End of page')
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
