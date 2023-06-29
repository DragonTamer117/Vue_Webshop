<template>
  <div class="container mx-auto">
    <form class="max-w-xl mx-auto mt-10 shadow rounded-2xl bg-white dark:bg-slate-700 p-8 mt-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2 dark:text-white">Email</label>
          <input type="email" id="email" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" v-model.trim="email" required>
        </div>
        <div>
          <label for="password" class="block text-gray-700 text-sm font-bold mb-2 dark:text-white">Password</label>
          <input type="password" id="password" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" v-model.trim="password" required>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div>
          <label for="firstname" class="block text-gray-700 text-sm font-bold mb-2 dark:text-white">First Name</label>
          <input type="text" id="firstname" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" v-model.trim="firstName" required>
        </div>
        <div>
          <label for="middlename" class="block text-gray-700 text-sm font-bold mb-2 dark:text-white">Middle Name</label>
          <input type="text" id="middlename" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" v-model.trim="middleName">
        </div>
        <div>
          <label for="lastname" class="block text-gray-700 text-sm font-bold mb-2 dark:text-white">Last Name</label>
          <input type="text" id="lastname" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" v-model.trim="lastName" required>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label for="birthdate" class="block text-gray-700 text-sm font-bold mb-2 dark:text-white">Birthdate</label>
          <input type="date" id="birthdate" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" v-model.trim="dateOfBirth" required>
        </div>
        <div>
          <label for="street" class="block text-gray-700 text-sm font-bold mb-2 dark:text-white">Street</label>
          <input type="text" id="street" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" v-model.trim="street" required>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div>
          <label for="housenumber" class="block text-gray-700 text-sm font-bold mb-2 dark:text-white">House Number</label>
          <input type="text" id="housenumber" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" v-model.trim="houseNr" required>
        </div>
        <div>
          <label for="postalcode" class="block text-gray-700 text-sm font-bold mb-2 dark:text-white">Postal Code</label>
          <input type="text" id="postalcode" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" v-model.trim="postalCode" required>
        </div>
        <div>
          <label for="city" class="block text-gray-700 text-sm font-bold mb-2 dark:text-white">City</label>
          <input type="text" id="city" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" v-model.trim="city" required>
        </div>
      </div>
      <div class="flex justify-center mt-6">
        <button @click="submitForm" type="submit" class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded mb-4">
          Register
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import login from "@/components/shared/login/login.vue";
import axios from "axios";
import router from "@/router";

export default {
    name: "register-component",
    data() {
        return {
            email: "",
            password: "",
            firstName: "",
            middleName: "",
            lastName: "",
            dateOfBirth: "",
            street: "",
            houseNr: "",
            postalCode: "",
            city: "",
            formIsValid: true
        }
    },
    methods: {
        async submitForm() {
            try {
              this.formIsValid = true;
              this.checkRegisterForm();

              const registerRequest = {
                email: this.email,
                password: this.password,
                firstName: this.firstName,
                middleName: this.middleName,
                lastName: this.lastName,
                dateOfBirth: this.dateOfBirth,
                street: this.street,
                houseNr: this.houseNr,
                postalCode: this.postalCode,
                city: this.city
              }

              await axios.post('http://localhost:8080/api/v1/auth/register', registerRequest)
                  .then(router.push({ path: '/' }));
            } catch (error) {
                console.error(error);
            }
        },
        checkRegisterForm() {
            if (!this.email.includes("@") || this.email.isEmpty ||
                this.password.isEmpty || this.password.length < 6) {
                return this.formIsValid = false;
            }
            if (this.firstName.length <= 1 || this.lastName.length <= 1) {
                return this.formIsValid = false;
            }
            if (this.street.length <= 1 ||
                this.houseNr.length <= 1 ||
                this.postalCode.length <= 1 ||
                this.postalCode.length > 6 ||
                this.city.length <= 1
            ) {
                return this.formIsValid = false;
            }
        },
        logout() {
            if (this.loggedInCheck === true) {
                this.token = "";
                return this.loggedInCheck = false;
            }
        }
    },
    computed: {
        login() {
            return login
        }
    }
}
</script>
<style scoped>

</style>