<template>
  <div v-if="auth().state.isAuthenticated === false">
    <section class="bg-gray-100 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form @submit.prevent="submitForm" class="space-y-4 md:space-y-6" action="#">
              <base-card>
                <div class="form-control">
                  <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                      type="email"
                      name="email"
                      id="email"
                      v-model.trim="email"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                      focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700
                      dark:text-white"
                      placeholder="name@company.com" required=""
                  />
                </div>
                <div class="form-control">
                  <label for="password" class="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                      type="password"
                      name="password"
                      id="password"
                      v-model.trim="password"
                      placeholder="••••••••"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                      focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700
                      dark:text-white"
                      required=""
                  />
                </div>
                <div class="w-full text-center">
                  <button
                      class="mt-3 mb-2 font-medium rounded-lg text-sm px-5 py-2.5 bg-blue-500 text-white hover:bg-blue-700
                      focus:bg-blue-900"
                  >
                    Sign in
                  </button>
                </div>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?
                  <router-link :to="{ path: '/register' }" class="font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Sign up
                  </router-link>
                </p>
              </base-card>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import { auth } from "@/services/auth";
import router from "@/router";
import {toast} from "vue3-toastify";

export default {
    name: "login-component",
    data() {
        return {
            email: "",
            password: "",
            formIsValid: true,
            mode: "login",
        }
    },
    methods: {
      auth() {
        return auth
      },
        async submitForm() {
          try {
            this.formIsValid = true;

            if (!this.email.includes("@") || this.email.isEmpty ||
                this.password.isEmpty || this.password.length < 6) {
                return this.formIsValid = false;
            }

            await auth.login(this.email, this.password);
            await router.push({ path: '/order' }).then(
                toast.success("Ingelogd!", {
                  autoClose: 1500,
                  position: "bottom-center",
                  closeOnClick: true,
                  closeButton: true,
                })
            );
          } catch (error) {
            toast.warn("Inlog gegevens kloppen niet!", {
              autoClose: 1500,
              position: "bottom-right",
              closeOnClick: true,
              closeButton: true,
            })
          }
        },
        logout() {
          auth.logout();
          toast.success("Uitgelogd", {
            autoClose: 1000,
            position: "bottom-right",
            closeOnClick: true,
            closeButton: true,
          });
        },
    }
}
</script>

<style scoped>

</style>