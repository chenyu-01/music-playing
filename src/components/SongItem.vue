<template>
  <li
    class="flex cursor-pointer items-center justify-between p-3 pl-6 transition duration-300 hover:bg-gray-50"
  >
    <div>
      <RouterLink
        :to="{ name: 'song', params: { id: song.docID } }"
        class="block font-bold text-gray-600"
      >
        {{ song.modifiedName }}
      </RouterLink>
      <span class="text-sm text-gray-500">
        {{ song.displayName }}
      </span>
    </div>

    <div class="text-lg text-gray-600">
      <RouterLink
        custom
        :to="{ name: 'song', params: { id: song.docID }, hash: '#comments' }"
        v-slot="{ navigate }"
      >
        <span class="comments" @click="navigate">
          <i class="fa fa-comments text-gray-600"></i>
          {{ song.commentCount }}
        </span>
      </RouterLink>
    </div>
  </li>
</template>
<script>
export default {
  name: 'SongItem',
  props: {
    song: {
      type: Object,
      required: true,
    },
  },
}
</script>
