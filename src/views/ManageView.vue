<template>
  <!-- Main Content -->
  <section class="container mx-auto mt-6">
    <div class="md:grid md:grid-cols-3 md:gap-4">
      <div class="col-span-1">
        <div
          class="relative flex flex-col rounded border border-gray-200 bg-white"
        >
          <div class="border-b border-gray-200 px-6 pb-5 pt-6 font-bold">
            <span class="card-title">Upload</span>
            <i class="fas fa-upload float-right text-2xl text-green-400"></i>
          </div>
          <div class="p-6">
            <!-- Upload Dropbox -->
            <div
              class="w-full cursor-pointer rounded border border-dashed border-gray-400 px-10 py-20 text-center text-gray-400 transition duration-500 hover:border-solid hover:border-green-400 hover:bg-green-400 hover:text-white"
            >
              <h5>Drop your files here</h5>
            </div>
            <hr class="my-6" />
            <!-- Progess Bars -->
            <div class="mb-4">
              <!-- File Name -->
              <div class="text-sm font-bold">Just another song.mp3</div>
              <div class="flex h-4 overflow-hidden rounded bg-gray-200">
                <!-- Inner Progress Bar -->
                <div
                  class="progress-bar bg-blue-400 transition-all"
                  style="width: 75%"
                ></div>
              </div>
            </div>
            <div class="mb-4">
              <div class="text-sm font-bold">Just another song.mp3</div>
              <div class="flex h-4 overflow-hidden rounded bg-gray-200">
                <div
                  class="progress-bar bg-blue-400 transition-all"
                  style="width: 35%"
                ></div>
              </div>
            </div>
            <div class="mb-4">
              <div class="text-sm font-bold">Just another song.mp3</div>
              <div class="flex h-4 overflow-hidden rounded bg-gray-200">
                <div
                  class="progress-bar bg-blue-400 transition-all"
                  style="width: 55%"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-2">
        <div
          class="relative flex flex-col rounded border border-gray-200 bg-white"
        >
          <div class="border-b border-gray-200 px-6 pb-5 pt-6 font-bold">
            <span class="card-title">My Songs</span>
            <i
              class="fa fa-compact-disc float-right text-2xl text-green-400"
            ></i>
          </div>
          <div class="p-6">
            <!-- Composition Items -->
            <div class="mb-4 rounded border border-gray-200 p-3">
              <div>
                <h4 class="inline-block text-2xl font-bold">Song Name</h4>
                <button
                  class="float-right ml-1 rounded bg-red-600 px-2 py-1 text-sm text-white"
                >
                  <i class="fa fa-times"></i>
                </button>
                <button
                  class="float-right ml-1 rounded bg-blue-600 px-2 py-1 text-sm text-white"
                >
                  <i class="fa fa-pencil-alt"></i>
                </button>
              </div>
              <div>
                <form>
                  <div class="mb-3">
                    <label class="mb-2 inline-block">Song Title</label>
                    <input
                      type="text"
                      class="block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none"
                      placeholder="Enter Song Title"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="mb-2 inline-block">Genre</label>
                    <input
                      type="text"
                      class="block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none"
                      placeholder="Enter Genre"
                    />
                  </div>
                  <button
                    type="submit"
                    class="rounded bg-green-600 px-3 py-1.5 text-white"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    class="rounded bg-gray-600 px-3 py-1.5 text-white"
                  >
                    Go Back
                  </button>
                </form>
              </div>
            </div>
            <div class="mb-4 rounded border border-gray-200 p-3">
              <div>
                <h4 class="inline-block text-2xl font-bold">Song Name</h4>
                <button
                  class="float-right ml-1 rounded bg-red-600 px-2 py-1 text-sm text-white"
                >
                  <i class="fa fa-times"></i>
                </button>
                <button
                  class="float-right ml-1 rounded bg-blue-600 px-2 py-1 text-sm text-white"
                >
                  <i class="fa fa-pencil-alt"></i>
                </button>
              </div>
            </div>
            <div class="mb-4 rounded border border-gray-200 p-3">
              <div>
                <h4 class="inline-block text-2xl font-bold">Song Name</h4>
                <button
                  class="float-right ml-1 rounded bg-red-600 px-2 py-1 text-sm text-white"
                >
                  <i class="fa fa-times"></i>
                </button>
                <button
                  class="float-right ml-1 rounded bg-blue-600 px-2 py-1 text-sm text-white"
                >
                  <i class="fa fa-pencil-alt"></i>
                </button>
              </div>
            </div>
            <div class="mb-4 rounded border border-gray-200 p-3">
              <div>
                <h4 class="inline-block text-2xl font-bold">Song Name</h4>
                <button
                  class="float-right ml-1 rounded bg-red-600 px-2 py-1 text-sm text-white"
                >
                  <i class="fa fa-times"></i>
                </button>
                <button
                  class="float-right ml-1 rounded bg-blue-600 px-2 py-1 text-sm text-white"
                >
                  <i class="fa fa-pencil-alt"></i>
                </button>
              </div>
            </div>
            <div class="mb-4 rounded border border-gray-200 p-3">
              <div>
                <h4 class="inline-block text-2xl font-bold">Song Name</h4>
                <button
                  class="float-right ml-1 rounded bg-red-600 px-2 py-1 text-sm text-white"
                >
                  <i class="fa fa-times"></i>
                </button>
                <button
                  class="float-right ml-1 rounded bg-blue-600 px-2 py-1 text-sm text-white"
                >
                  <i class="fa fa-pencil-alt"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ManageView',
}
</script>
