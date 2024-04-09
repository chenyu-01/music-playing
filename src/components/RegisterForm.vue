<template>
  <div
    class="mb-4 rounded p-4 text-center font-bold text-white"
    v-if="regShowAlert"
    :class="regAlertVariant"
  >
    {{ regAlertMessage }}
  </div>
  <!-- Registration Form -->
  <VeeForm
    :validation-schema="schema"
    @submit="register"
    :initial-values="userData"
  >
    <!-- Name -->
    <div class="mb-3">
      <label class="mb-2 inline-block">Name</label>
      <VeeField
        name="name"
        type="text"
        class="block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none"
        placeholder="Enter Name"
      />
      <ErrorMessage class="text-red-600" name="name" />
    </div>
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
    <!-- Age -->
    <div class="mb-3">
      <label class="mb-2 inline-block">Age</label>
      <VeeField
        name="age"
        type="number"
        class="block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none"
      />
      <ErrorMessage class="text-red-600" name="age" />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="mb-2 inline-block">Password</label>
      <VeeField name="password" :bails="false" v-slot="{ field, errors }">
        <input
          type="password"
          class="block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none"
          placeholder="Password"
          v-bind="field"
        />
        <div class="text-red-600" v-for="error in errors" :key="error">
          {{ error }}
        </div>
      </VeeField>
    </div>
    <!-- Confirm Password -->
    <div class="mb-3">
      <label class="mb-2 inline-block">Confirm Password</label>
      <VeeField
        name="confirmPassword"
        type="password"
        class="block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none"
        placeholder="Confirm Password"
      />
      <ErrorMessage class="text-red-600" name="confirmPassword" />
    </div>
    <!-- Country -->
    <div class="mb-3">
      <label class="mb-2 inline-block">Country</label>
      <VeeField
        as="select"
        name="country"
        class="block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none"
      >
        <option value="USA">USA</option>
        <option value="Mexico">Mexico</option>
        <option value="Germany">Germany</option>
        <option value="Antarctica">Antarctica</option>
      </VeeField>
      <ErrorMessage class="text-red-600" name="country" />
    </div>
    <!-- TOS -->
    <div class="mb-3 pl-6">
      <VeeField
        name="tos"
        value="1"
        type="checkbox"
        class="float-left -ml-6 mt-1 h-4 w-4 rounded"
      />
      <i18n-t class="inline-block" keypath="register.accept" tag="label"
        ><a href="#">
          {{ $t('register.tos') }}
        </a></i18n-t
      >
      <ErrorMessage class="block text-red-600" name="tos" />
    </div>
    <button
      type="submit"
      class="block w-full rounded bg-purple-600 px-3 py-1.5 text-white transition hover:bg-purple-700"
      :disabled="regInSubmission"
    >
      Submit
    </button>
  </VeeForm>
</template>

<script>
import useUserStore from '@/stores/user'
import { mapActions } from 'pinia'
export default {
  name: 'RegisterForm',
  data() {
    return {
      schema: {
        name: 'required|min:3|max:50|alpha_spaces',
        email: 'required|email|min:3|max:100',
        age: 'required|min_value:18|max_value:100',
        password: 'required|min:9|max:50|excluded:password',
        confirmPassword: 'passwords_mismatch:@password',
        country: 'required|country_excluded:Antarctica',
        tos: 'tos',
      },

      userData: {
        country: 'USA',
      },
      regInSubmission: false,
      regShowAlert: false,
      regAlertVariant: 'bg-blue-500',
      regAlertMessage: 'Please wait! Your account is being created.',
    }
  },
  methods: {
    ...mapActions(useUserStore, {
      createUser: 'register',
    }),
    async register(values) {
      this.regShowAlert = true
      this.regInSubmission = true
      this.regAlertVariant = 'bg-blue-500'
      this.regAlertMessage = 'Please wait! Your account is being created.'
      try {
        await this.createUser(values)
      } catch (error) {
        this.regInSubmission = false
        this.regAlertVariant = 'bg-red-500'
        this.regAlertMessage = error.message
        return
      }
      this.regAlertVariant = 'bg-green-500'
      this.regAlertMessage = 'Account created successfully!'
      window.location.reload()
    },
  },
}
</script>
