<template>
  <div class="bg-gray-100 min-h-screen">
    <header class="bg-white shadow">
      <div class="container mx-auto px-4 py-6">
        <h1 class="text-3xl font-bold text-gray-800">Dit moet nog veranderd worden</h1>
      </div>
    </header>
    <main class="container mx-auto px-4 py-6">
      <div class="bg-white shadow rounded-lg p-6">
        <h2 class="text-xl font-bold mb-4">Personal Information</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="text-gray-700">First Name</label>
            <input v-model="currentUser.firstName" type="text" class="form-input ml-2 border-2 mt-1" />
          </div>
          <div>
            <label class="text-gray-700">Last Name</label>
            <input v-model="currentUser.lastName" type="text" class="form-input ml-2 border-2  mt-1" />
          </div>
        </div>
        <div class="mt-4">
          <label class="text-gray-700">Email</label>
          <input v-model="currentUser.email" type="email" class="form-input ml-2 border-2  mt-1" />
        </div>
        <div class="mt-4">
          <button @click="saveChanges" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Save Changes
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { auth } from "@/services/auth";

export default {
  name: "admin-component",
  data() {
    return {
      currentUser: {
        email: '',
        password: '',
        dayOfBirth: '',
        firstName: '',
        middleName: '',
        lastName: '',
        street: '',
        houseNr: '',
        postalCode: '',
        city: ''
      }
    }
  },
  computed: {
    loadedUser() {
      return auth.state.currentUser;
    }
  },
  created() {
    this.currentUser = this.loadedUser;
  },
  methods: {

  },
  beforeMount() {

  }
}
</script>

<style scoped>

</style>