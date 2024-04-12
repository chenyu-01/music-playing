<template>
  <main>
    <!-- Music Header -->
    <section class="relative mb-8 w-full py-14 text-center text-white">
      <div
        class="music-bg absolute inset-0 box-border h-full w-full bg-contain"
        style="background-image: url(/assets/img/song-header.png)"
      />
      <div class="container mx-auto flex items-center">
        <!-- Play/Pause Button -->
        <button
          @click.prevent="newSong(song)"
          type="button"
          class="z-50 h-24 w-24 rounded-full bg-white text-3xl text-black focus:outline-none"
          :disabled="commentInSubmission"
        >
          <i class="fas fa-play"></i>
        </button>
        <div class="z-50 ml-8 text-left">
          <!-- Song Info -->
          <div class="text-3xl font-bold">{{ song.modifiedName }}</div>
          <div>{{ song.genre }}</div>
          <div class="song-price">{{ $n(1, 'currency', 'cn') }}</div>
        </div>
      </div>
    </section>
    <!-- Form -->
    <section class="container mx-auto mt-6" id="comments">
      <div
        class="relative flex flex-col rounded border border-gray-200 bg-white"
      >
        <div class="border-b border-gray-200 px-6 pb-5 pt-6 font-bold">
          <!-- Comment Count -->
          <span class="card-title">
            {{
              $tc('song.commentCount', song.commentCount, {
                count: song.commentCount,
              })
            }}
          </span>
          <i class="fa fa-comments float-right text-2xl text-green-400"></i>
        </div>
        <div class="p-6">
          <div
            class="mb-4 p-4 text-center font-bold text-white"
            v-if="commentShowAlert"
            :class="commentAlertVariant"
          >
            {{ commentAlertMessage }}
          </div>
          <VeeForm
            :validation-schema="schema"
            @submit="addComment"
            v-show="userLoggedIn"
          >
            <VeeField
              as="textarea"
              name="comment"
              class="mb-4 block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none"
              placeholder="Your comment here..."
            ></VeeField>
            <ErrorMessage name="comment" class="text-red-500"></ErrorMessage>
            <button
              type="submit"
              class="block rounded bg-green-600 px-3 py-1.5 text-white"
            >
              Submit
            </button>
          </VeeForm>
          <!-- Sort Comments -->
          <select
            v-model="sortingOrder"
            class="mt-4 block rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none"
          >
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>
    </section>
    <!-- Comments -->
    <ul class="container mx-auto">
      <li
        class="border border-gray-200 bg-gray-50 p-6"
        v-for="comment in sortedComments"
        :key="comment.docID"
      >
        <!-- Comment Author -->
        <div class="mb-5">
          <div class="font-bold">{{ comment.name }}</div>
          <time>{{ comment.datePosted }}</time>
        </div>

        <p>
          {{ comment.content }}
        </p>
      </li>
    </ul>
  </main>
</template>
<script>
import { songsCollection, commentsCollection, auth } from '@/includes/firebase'
import {
  addDoc,
  doc,
  getDoc,
  updateDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore'
import { mapState, mapActions } from 'pinia'
import usePlayerStore from '@/stores/player.js'
import useUserStore from '@/stores/user.js'
export default {
  name: 'SongView',
  data() {
    return {
      comments: [],
      song: {},
      schema: {
        comment: 'required|min:3',
      },
      commentInSubmission: false,
      commentShowAlert: false,
      commentAlertVariant: 'bg-blue-500',
      commentAlertMessage: 'Please wait! Your comment is being submitted.',
      sortingOrder: 'latest',
    }
  },
  computed: {
    ...mapState(useUserStore, ['userLoggedIn']),
    sortedComments() {
      return this.comments.slice().sort((a, b) => {
        if (this.sortingOrder === 'latest') {
          // from biggest date to smallest date
          return new Date(b.datePosted) - new Date(a.datePosted) // latest first
        }
        return new Date(a.datePosted) - new Date(b.datePosted) // oldest first
      })
    },
  },
  methods: {
    ...mapActions(usePlayerStore, ['newSong']),
    async addComment(values, { resetForm }) {
      this.commentInSubmission = true
      this.commentShowAlert = true
      this.commentAlertVariant = 'bg-blue-500'
      this.commentAlertMessage = 'Please wait! Your comment is being submitted.'
      // insert comment to the database
      const comment = {
        content: values.comment,
        datePosted: new Date().toString(),
        sid: this.$route.params.id,
        name: auth.currentUser.displayName,
        uid: auth.currentUser.uid,
      }
      await addDoc(commentsCollection, comment)
      this.song.commentCount += 1
      await updateDoc(doc(songsCollection, this.$route.params.id), {
        commentCount: this.song.commentCount,
      })
      this.getComments()
      this.commentInSubmission = false
      this.commentShowAlert = true
      this.commentAlertVariant = 'bg-green-500'
      this.commentAlertMessage = 'Comment submitted successfully!'
      resetForm()
    },
    async getComments() {
      const q = query(
        commentsCollection,
        where('sid', '==', this.$route.params.id)
      )
      const querySnapshot = await getDocs(q)
      this.comments = []
      querySnapshot.forEach((doc) => {
        this.comments.push({
          docID: doc.id,
          ...doc.data(),
        })
      })
    },
  },
  async beforeRouteEnter(to, from, next) {
    const docSnapshot = await getDoc(doc(songsCollection, to.params.id))
    next((vm) => {
      if (!docSnapshot.exists()) {
        vm.$router.push({ name: 'home' })
        return
      }
      vm.song = docSnapshot.data()
      vm.getComments()
      const { sort } = vm.$route.query
      if (sort === 'oldest' || sort === 'latest') {
        vm.sortingOrder = sort
      } else {
        vm.sortingOrder = 'latest'
      }
    })
  },
  watch: {
    sortingOrder(newVal) {
      if (newVal === this.$route.query.sort) return
      this.$router.push({
        query: { sort: newVal },
      })
    },
  },
}
</script>
