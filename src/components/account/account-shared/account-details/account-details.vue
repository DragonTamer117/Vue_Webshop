<template>
  <div class="bg-gray-100 dark:bg-slate-800">
    <header class="bg-white dark:bg-slate-700 shadow">
      <div class="container mx-auto px-4 py-6">
        <h1 class="text-3xl font-bold text-gray-800 dark:text-white">Account Details</h1>
      </div>
    </header>
    <main class="container mx-auto px-4 py-6">
      <div class="bg-white shadow rounded-lg p-6 dark:bg-slate-700">
        <h2 class="text-xl font-bold mb-0 mt-0">Personal Information</h2>
        <h3 class="text-xs font-bold italic mb-4">
          Personalized id: <span class="border border-solid border-gray-300 pl-1 pr-1">{{ currentUser.id }}</span>
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block">Email</label>
            <input
                :placeholder="currentUser.email"
                @input="currentUser.email = $event.target.value"
                type="email"
                class="form-input border-2 mt-1 dark:bg-white dark:text-black rounded-2xl p-2"
            />
          </div>
          <div>
            <label class="block">First Name</label>
            <input
                :placeholder="currentUser.firstName"
                @input="currentUser.firstName = $event.target.value"
                type="text"
                class="form-input border-2 mt-1 dark:bg-white dark:text-black rounded-2xl p-2"
            />
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div>
            <label class="block">Middle Name</label>
            <input
                :placeholder="currentUser.middleName"
                @input="currentUser.middleName = $event.target.value"
                type="text"
                class="form-input border-2 mt-1 dark:bg-white dark:text-black rounded-2xl p-2"
            />
          </div>
          <div>
            <label class="block">Last Name</label>
            <input
                :placeholder="currentUser.lastName"
                @input="currentUser.lastName = $event.target.value"
                type="text"
                class="form-input border-2 mt-1 dark:bg-white dark:text-black rounded-2xl p-2"
            />
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div>
            <label class="block">Street</label>
            <input
                :placeholder="currentUser.street"
                @input="currentUser.street = $event.target.value"
                type="text"
                class="form-input border-2 mt-1 dark:bg-white dark:text-black rounded-2xl p-2"
            />
          </div>
          <div>
            <label class="block">House Number</label>
            <input
                :placeholder="currentUser.houseNr"
                @input="currentUser.houseNr = $event.target.value"
                type="text"
                class="form-input border-2 mt-1 dark:bg-white dark:text-black rounded-2xl p-2"
            />
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">

          <div>
            <label class="block">Postal Code</label>
            <input
                :placeholder="currentUser.postalCode"
                @input="currentUser.postalCode = $event.target.value"
                type="text"
                class="form-input border-2 mt-1 dark:bg-white dark:text-black rounded-2xl p-2"
            />
          </div>
          <div>
            <label class="block">City</label>
            <input
                :placeholder="currentUser.city"
                @input="currentUser.city = $event.target.value"
                type="text"
                class="form-input border-2 mt-1 dark:bg-white dark:text-black rounded-2xl p-2"
            />
          </div>
          <div>
            <label class="block">Birthdate</label>
            <input
                :placeholder="currentUser.dateOfBirth"
                @input="currentUser.dateOfBirth = $event.target.value"
                type="date"
                class="form-input border-2 mt-1 dark:bg-white dark:text-black rounded-2xl p-2"
            />
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
import { StoreVars } from "@/components/shop/shop-item/StoreVars";
import axios from "axios";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default defineComponent({
  name: "account-details",
  data() {
    return {
      currentUser: {
        email: "",
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
    async saveChanges() {
      let id = this.loadedUser.id;
      const config = {
        headers: { Authorization: `Bearer ${StoreVars().token}` }
      };

      const body = {
        email: this.currentUser.email,
        firstName: this.currentUser.firstName,
        middleName: this.currentUser.middleName,
        lastName: this.currentUser.lastName,
        dateOfBirth: this.formatDate(this.currentUser.dateOfBirth),
        street: this.currentUser.street,
        houseNr: this.currentUser.houseNr,
        postalCode: this.currentUser.postalCode,
        city: this.currentUser.city
      };

      console.log(body);

      await axios.put(auth.baseUrl + `users/${id}`, body, config).then(() => {
        toast.success("Saved!", {
          autoClose: 1000,
          position: "bottom-right",
          closeOnClick: true,
          closeButton: true,
        });
      });
    },
    formatDate(dateString) {
      const date = new Date(dateString)
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');

      return `${year}-${month}-${day}`;
    }
  }
});
</script>

<style scoped>

</style>