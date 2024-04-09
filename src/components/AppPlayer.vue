<template>
  <!-- Player -->
  <div class="fixed bottom-0 left-0 w-full bg-white px-4 py-2">
    <!-- Track Info -->
    <div class="text-center" v-if="currentSong.modifiedName">
      <span class="song-title font-bold">{{ currentSong.modifiedName }}</span>
      by
      <span class="song-artist">{{ currentSong.displayName }}</span>
    </div>
    <div class="flex flex-nowrap items-center gap-4">
      <!-- Play/Pause Button -->
      <button type="button" @click.prevent="toggleAudio">
        <i
          class="fa text-xl text-gray-500"
          :class="{ 'fa-play': !isPlaying, 'fa-pause': isPlaying }"
        ></i>
      </button>
      <!-- Current Position -->
      <div class="player-currenttime">{{ seek }}</div>
      <!-- Scrub Container  -->
      <div
        class="relative h-2 w-full cursor-pointer rounded bg-gray-200"
        @click.prevent="updateSeek"
      >
        <!-- Player Ball -->
        <span
          class="absolute -top-2.5 -ml-2.5 text-lg text-gray-800"
          :style="{ left: playerProgress }"
        >
          <i class="fas fa-circle"></i>
        </span>
        <!-- Player Progress Bar-->
        <span
          class="block h-2 rounded bg-gradient-to-r from-green-500 to-green-400"
          :style="{ width: playerProgress }"
        ></span>
      </div>
      <!-- Duration -->
      <div class="player-duration">{{ duration }}</div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'pinia'
import usePlayerStore from '@/stores/player'

export default {
  name: 'AppPlayer',
  methods: {
    ...mapActions(usePlayerStore, ['toggleAudio', 'updateSeek']),
  },
  computed: {
    ...mapState(usePlayerStore, [
      'isPlaying',
      'duration',
      'seek',
      'playerProgress',
      'currentSong',
    ]),
  },
}
</script>
