<template>
  <div class="bg-gray-100">
    <header class="bg-white shadow">
      <div class="container mx-auto px-4 py-6">
        <h1 class="text-3xl font-bold text-gray-800">Account Details</h1>
      </div>
    </header>
    <main class="container mx-auto px-4 py-6">
      <div class="bg-white shadow rounded-lg p-6">
        <h2 class="text-xl font-bold mb-0 mt-0">Personal Information</h2>
        <h3 class="text-xs font-bold italic mb-4">
          Personalized id: <span class="border border-solid border-gray-300 pl-1 pr-1">{{ currentUser.id }}</span>
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="text-gray-700 block">Email</label>
            <input v-model="currentUser.email" type="email" class="form-input border-2 mt-1" />
          </div>
          <div>
            <label class="text-gray-700 block">First Name</label>
            <input v-model="currentUser.firstName" type="text" class="form-input border-2 mt-1" />
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div>
            <label class="text-gray-700 block">Last Name</label>
            <input v-model="currentUser.lastName" type="text" class="form-input border-2 mt-1" />
          </div>
          <div>
            <label class="text-gray-700 block">Street</label>
            <input v-model="currentUser.street" type="text" class="form-input border-2 mt-1" />
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div>
            <label class="text-gray-700 block">House Number</label>
            <input v-model="currentUser.houseNr" type="text" class="form-input border-2 mt-1" />
          </div>
          <div>
            <label class="text-gray-700 block">Postal Code</label>
            <input v-model="currentUser.postalCode" type="text" class="form-input border-2 mt-1" />
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div>
            <label class="text-gray-700 block">City</label>
            <input v-model="currentUser.city" type="text" class="form-input border-2 mt-1" />
          </div>
          <div>
            <label class="text-gray-700 block">Date of Birth</label>
            <input v-model="currentUser.dayOfBirth" type="date" class="form-input border-2 mt-1" />
          </div>
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
import { defineComponent } from 'vue'
import { auth } from "@/services/auth";

export default defineComponent({
  name: "account-details",
  data() {
    return {
      currentUser: {
        email: "",
        password: "",
        dateOfBirth: "",
        firstName: "",
        middleName: "",
        lastName: "",
        street: "",
        houseNr: "",
        postalCode: "",
        city: ""
      }
    };
  },
  computed: {
    loadedUser() {
      const user = auth.state.currentUser;
      if (user.dateOfBirth) {
        const date = new Date(user.dateOfBirth);
        user.dateOfBirth = date.toLocaleDateString();
      }
      return user;
    },
  },
  created() {
    this.currentUser = this.loadedUser;
  },
  methods: {
    saveChanges() {
      console.log(this.loadedUser.dateOfBirth);
      console.log(this.currentUser.dateOfBirth);
    }
  }
});
</script>

<style scoped>

</style>