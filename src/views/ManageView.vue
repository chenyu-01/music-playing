<template>
  <!-- Main Content -->
  <section class="container mx-auto mt-6">
    <div class="md:grid md:grid-cols-3 md:gap-4">
      <div class="col-span-1">
        <ManageUpload ref="upload" :addSong="addSong" />
      </div>
      <div class="col-span-2">
        <div
          class="relative flex flex-col rounded border border-gray-200 bg-white"
        >
          <div class="border-b border-gray-200 px-6 pb-5 pt-6 font-bold">
            <span class="card-title">{{ $t('manage.mySongs') }}</span>
            <i
              class="fa fa-compact-disc float-right text-2xl text-green-400"
            ></i>
          </div>
          <div class="p-6">
            <!-- Composition Items -->
            <CompositionItem
              v-for="(song, i) in songs"
              :key="song.docID"
              :song="song"
              :index="i"
              :deleteSong="deleteSong"
              :updateSong="updateSong"
              :updateUnsavedFlag="updateUnsavedFlag"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ManageUpload from '@/components/ManageUpload.vue'
import CompositionItem from '@/components/CompositionItem.vue'
import { songsCollection, auth, storage, db } from '@/includes/firebase'
import {
  query,
  where,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore'
import { deleteObject, ref } from 'firebase/storage'
export default {
  name: 'ManageView',
  components: {
    ManageUpload,
    CompositionItem,
  },
  data() {
    return {
      songs: [],
      unsavedFlag: false,
    }
  },
  async created() {
    const q = query(songsCollection, where('uid', '==', auth.currentUser.uid))
    const snapshots = await getDocs(q)
    for (const document of snapshots.docs) {
      this.addSong(document)
    }
  },
  methods: {
    updateSong(i, values) {
      const song = this.songs[i]
      song.modifiedName = values.modifiedName
      song.genre = values.genre
      const songRef = doc(db, 'songs', song.docID) // get the document reference
      return updateDoc(songRef, values)
    },
    async deleteSong(i) {
      const song = this.songs[i]
      const songRef = doc(db, 'songs', song.docID) // get the document reference
      await deleteDoc(songRef)
      const storageRef = ref(storage, `songs/${song.originalName}`) // get the storage reference
      await deleteObject(storageRef)
      this.songs.splice(i, 1) // remove the song from the array
    },
    addSong(document) {
      const song = {
        docID: document.id,
        ...document.data(),
      }
      this.songs.push(song)
    },
    updateUnsavedFlag(value) {
      this.unsavedFlag = value
    },
  },
  beforeRouteLeave(to, from, next) {
    if (!this.unsavedFlag) {
      next()
    } else {
      const leave = confirm(
        'You have unsaved changes. Do you really want to leave?'
      )
      next(leave)
    }
  },
}
</script>
