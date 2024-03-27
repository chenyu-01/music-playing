<template>
  <div
    class="mb-4 rounded p-4 text-center font-bold text-white"
    v-if="loginShowAlert"
    :class="loginAlertVariant"
  >
    {{ loginAlertMessage }}
  </div>
  <!-- Login Form -->
  <VeeForm :validation-schema="loginSchema" @submit="login">
    <!-- Email -->
    <div class="mb-3">
      <label class="mb-2 inline-block">Email</label>
      <VeeField
        name="email"
        type="email"
        class="block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none"
        placeholder="Enter Email"
      />
      <ErrorMessage class="text-red-600" name="email" />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="mb-2 inline-block">Password</label>
      <VeeField
        name="password"
        type="password"
        class="block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none"
        placeholder="Password"
      />
    </div>
    <ErrorMessage class="text-red-600" name="password" />
    <button
      type="submit"
      class="block w-full rounded bg-purple-600 px-3 py-1.5 text-white transition hover:bg-purple-700"
      :disabled="loginInSubmission"
    >
      Submit
    </button>
  </VeeForm>
</template>

<script>
import { mapActions } from 'pinia'
import useUserStore from '@/stores/user'
export default {
  name: 'LoginForm',
  data() {
    return {
      loginSchema: {
        email: 'required|email|min:3|max:100',
        password: 'required|min:9|max:50|excluded:password',
      },
      loginInSubmission: false,
      loginShowAlert: false,
      loginAlertVariant: 'bg-blue-500',
      loginAlertMessage: 'Please wait! We are logging you in.',
    }
  },

  methods: {
    ...mapActions(useUserStore, {
      authenticate: 'login',
    }),
    async login(values) {
      this.loginInSubmission = true
      this.loginShowAlert = true
      this.loginAlertVariant = 'bg-blue-500'
      this.loginAlertMessage = 'Please wait! We are logging you in.'
      try {
        await this.authenticate(values)
      } catch (error) {
        this.loginInSubmission = false
        this.loginShowAlert = true
        this.loginAlertVariant = 'bg-red-500'
        const errorJson = JSON.parse(error.message) // Parse the error message
        this.loginAlertMessage = errorJson.error.message
        return
      }
      this.loginAlertVariant = 'bg-green-500'
      this.loginAlertMessage = 'You are now logged in.'
      window.location.reload()
    },
  },
}
</script>
