<template>
  <div class="mb-4 rounded border border-gray-200 p-3">
    <div v-show="!showForm">
      <h4 class="inline-block text-2xl font-bold">{{ song.modifiedName }}</h4>
      <button
        class="float-right ml-1 rounded bg-red-600 px-2 py-1 text-sm text-white"
        @click.prevent="songDelete"
      >
        <i class="fa fa-times"></i>
      </button>
      <button
        class="float-right ml-1 rounded bg-blue-600 px-2 py-1 text-sm text-white"
        @click.prevent="showForm = true"
      >
        <i class="fa fa-pencil-alt"></i>
      </button>
    </div>
    <div v-show="showForm">
      <div
        class="mb-4 p-4 text-center font-bold text-white"
        v-if="showAlert"
        :class="alertVariant"
      >
        {{ alertMessage }}
      </div>
      <VeeForm
        :validation-schema="songSchema"
        @submit="editSong"
        :initial-values="song"
      >
        <div class="mb-3">
          <label class="mb-2 inline-block">Song Title</label>
          <VeeField
            name="modifiedName"
            type="text"
            class="block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none"
            placeholder="Enter Song Title"
            @input="updateUnsavedFlag(true)"
          />
          <ErrorMessage class="text-red-600" name="modifiedName" />
        </div>
        <div class="mb-3">
          <label class="mb-2 inline-block">Genre</label>
          <VeeField
            name="genre"
            type="text"
            class="block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none"
            placeholder="Enter Genre"
            @input="updateUnsavedFlag(true)"
          />
          <ErrorMessage class="text-red-600" name="genre" />
        </div>
        <button
          type="submit"
          class="rounded bg-green-600 px-3 py-1.5 text-white"
          :disabled="inSubmission"
        >
          Submit
        </button>
        <button
          type="button"
          class="rounded bg-gray-600 px-3 py-1.5 text-white"
          :disabled="inSubmission"
          @click.prevent="showForm = false"
        >
          Go Back
        </button>
      </VeeForm>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CompositionItem',
  props: {
    song: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    updateSong: {
      type: Function,
      required: true,
    },
    deleteSong: {
      type: Function,
      required: true,
    },
    updateUnsavedFlag: {
      type: Function,
    },
  },
  data() {
    return {
      showForm: false,
      songSchema: {
        modifiedName: 'required',
        genre: 'alpha_spaces',
      },
      inSubmission: false,
      showAlert: false,
      alertVariant: 'bg-blue-500',
      alertMessage: 'Please wait! We are updating the song.',
    }
  },
  methods: {
    async editSong(values) {
      this.inSubmission = true
      this.showAlert = true
      this.alertVariant = 'bg-blue-500'
      try {
        await this.updateSong(this.index, values)
        this.updateUnsavedFlag(false)
        this.alertVariant = 'bg-green-500'
        this.alertMessage = 'Song updated successfully!'
      } catch (error) {
        this.alertVariant = 'bg-red-500'
        this.alertMessage = error.message
        console.error(error)
      }
      this.inSubmission = false
    },

    async songDelete() {
      this.showAlert = true
      this.alertVariant = 'bg-blue-500'
      this.alertMessage = 'Please wait! We are deleting the song.'
      try {
        await this.deleteSong(this.index)
        this.alertVariant = 'bg-green-500'
        this.alertMessage = 'Song deleted successfully!'
      } catch (error) {
        this.alertVariant = 'bg-red-500'
        this.alertMessage = error.message
        console.error(error)
      }
    },
  },
}
</script>
