<template>
  <div class="relative flex flex-col rounded border border-gray-200 bg-white">
    <div class="border-b border-gray-200 px-6 pb-5 pt-6 font-bold">
      <span class="card-title">Upload</span>
      <i class="fas fa-upload float-right text-2xl text-green-400"></i>
    </div>
    <div class="p-6">
      <!-- Upload Dropbox -->
      <div
        class="w-full cursor-pointer rounded border border-dashed border-gray-400 px-10 py-20 text-center text-gray-400 transition duration-500 hover:border-solid hover:border-green-400 hover:bg-green-400 hover:text-white"
        :class="{ 'border-solid border-green-400 bg-green-400': isDragging }"
        @drag.prevent.stop=""
        @dragstart.prevent.stop=""
        @dragend.prevent.stop="isDragging = false"
        @dragover.prevent.stop="isDragging = true"
        @dragenter.prevent.stop="isDragging = true"
        @dragleave.prevent.stop="isDragging = false"
        @drop.prevent.stop="upload($event)"
      >
        <h5>Drop your files here</h5>
      </div>
      <input type="file" multiple @change="upload($event)" />
      <hr class="my-6" />
      <!-- Progess Bars -->
      <div class="mb-4" v-for="upload in uploads" :key="upload.name">
        <!-- File Name -->
        <div class="text-sm font-bold" :class="upload.textClass">
          <i :class="upload.icon"></i> {{ upload.name }}
        </div>
        <div class="flex h-4 overflow-hidden rounded bg-gray-200">
          <!-- Inner Progress Bar -->
          <div
            class="progress-bar bg-blue-400 transition-all"
            :class="upload.varient"
            :style="{ width: `${upload.currentProgress}%` }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { storage, auth, songsCollection } from '@/includes/firebase.js'
import { addDoc, getDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
export default {
  name: 'ManageUpload',
  data() {
    return {
      isDragging: false,
      uploads: [],
    }
  },
  props: ['addSong'],
  methods: {
    upload(event) {
      this.isDragging = false
      const files = event.dataTransfer
        ? [...event.dataTransfer.files]
        : [...event.target.files]
      files.forEach((file) => {
        if (file.type !== 'audio/mpeg') {
          console.error('Invalid file type')
          return
        }
        const songsRef = ref(storage, `songs/${file.name}`) // music-4a433.appspot.com/songs/just-another-song.mp3

        const task = uploadBytesResumable(songsRef, file)
        const uploadIndex =
          this.uploads.push({
            task,
            currentProgress: 0,
            name: file.name,
            varient: 'bg-blue-400',
            icon: 'fa fa-spinner fa-spin',
            textClass: '',
          }) - 1 // push returns the new length of the array
        task.on(
          'state_changed',
          (snapshot) => {
            const percentage =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            this.uploads[uploadIndex].currentProgress = percentage
          },
          (error) => {
            this.uploads[uploadIndex].varient = 'bg-red-400'
            this.uploads[uploadIndex].icon = 'fa fa-exclamation-circle'
            this.uploads[uploadIndex].textClass = 'text-red-400'
            console.error(error)
          },
          async () => {
            const url = await getDownloadURL(task.snapshot.ref)
            const song = {
              uid: auth.currentUser.uid,
              displayName: auth.currentUser.displayName,
              originalName: task.snapshot.ref.name,
              modifiedName: task.snapshot.ref.name,
              genre: '',
              commentCount: 0,
              url,
            }
            const docRef = await addDoc(songsCollection, song)
            const docSnapshot = await getDoc(docRef)
            this.addSong(docSnapshot)
            this.uploads[uploadIndex].varient = 'bg-green-400'
            this.uploads[uploadIndex].icon = 'fa fa-check-circle'
            this.uploads[uploadIndex].textClass = 'text-green-400'
          }
        )
      })
    },
    cancelUpload() {
      this.uploads.forEach((upload) => {
        upload.task.cancel()
      })
    },
  },

  beforeUnmount() {
    this.cancelUpload()
  },
}
</script>
