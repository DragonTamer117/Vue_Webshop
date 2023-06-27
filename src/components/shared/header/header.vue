<template>
  <nav class="bg-sky-900 border-gray-200 px-2 sm:px-4">
    <div class="container flex flex-wrap items-center justify-between">
      <router-link :to="{ path: '/' }" class="flex items-center">
        <span class="self-center text-xl font-semibold whitespace-nowrap text-white italic p-4 rounded-xl bg-emerald-700 dark:bg-emerald-900">
          <span class="flex items-center">
            <img
                :src="require('@/assets/favicon_ebike.png')"
                alt="Ebike Logo"
                class="img-responsive mr-2"
                style="max-height: 50px;"
            />
            <span class="mr-2">E-bike Nederland</span>
          </span>
        </span>
      </router-link>
      <div class="group-aria-hidden:w-full md:block md:w-auto">
        <ul
            class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-sky-900 md:flex-row md:space-x-8 md:mt-0
        md:text-sm md:font-medium md:border-0 md:bg-sky-900 border-gray-700"
        >
          <router-link :to="{ path: `/` }"
              class="block py-2 pl-3 pr-4 text-gray-400 rounded md:border-0 md:p-0 hover:text-white"
          >
            Shop
          </router-link>
          <router-link
              :to="{ path: `account` }"
              v-if="isAuthenticated === true"
              class="block py-2 pl-3 pr-4 text-gray-400 rounded md:border-0 md:p-0 hover:text-white"
          >
            Account
          </router-link>
          <router-link :to="{ path: `admin` }"
                       v-if="isAuthenticated === true && (role === 'ADMIN' || role === 'MODERATOR')"
                       class="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-gray-400 hover:text-white hover:text-white"
          >
            Beheer
          </router-link>
          <router-link :to="{ path: 'order' }" class="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-400">
            <button class="relative flex">
              <svg class="flex-1 w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path
                    d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,
                    2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,
                    14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34
                    21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89
                    8.1,18 7,18Z"/>
              </svg>
              <span
                  class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono
                  text-sm leading-tight text-center" v-if="products.length !== 0"
              >
                {{ products.length }}
              </span>
            </button>
          </router-link>
          <router-link
              :to="{ path: 'login' }"
              @click="logout()"
              class="block py-2 pl-3 pr-4 text-gray-400 rounded font-bold md:p-0 hover:text-white
              md:hover:bg-transparent md:dark:hover:bg-transparent "
          >
            <svg
                v-if="!isAuthenticated"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="flex-1 w-8 h-8"
            >
              <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411
                  14.0589 42 24 42ZM24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4
                  24C4 35.0457 12.9543 44 24 44Z"
                  fill="#333333"
              />
              <path
                  d="M12 35.6309C12 34.5972 12.772 33.7241 13.7995 33.6103C21.515 32.7559 26.5206 32.8325 34.218
                  33.6287C35.2324 33.7337 36 34.5918 36 35.6116C36 36.1807 35.7551 36.7275 35.3262 37.1014C26.2414
                  45.0195 21.0488 44.9103 12.6402 37.1087C12.2306 36.7286 12 36.1897 12 35.6309Z"
                  fill="#333333"
              />
              <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M34.1151 34.6234C26.4784 33.8334 21.5449 33.7587 13.9095 34.6042C13.3954 34.6612 13 35.1002 13
                  35.6309C13 35.9171 13.1187 36.1885 13.3204 36.3757C17.4879 40.2423 20.6461 41.9887 23.7333 41.9999C26.8309
                  42.0113 30.1592 40.2783 34.6691 36.3476C34.8767 36.1667 35 35.8964 35 35.6116C35 35.0998 34.6154
                  34.6752 34.1151 34.6234ZM13.6894 32.6164C21.4852 31.7531 26.5628 31.8315 34.3209 32.6341C35.8495
                  32.7922 37 34.0838 37 35.6116C37 36.465 36.6336 37.2884 35.9832 37.8553C31.4083 41.8426 27.598 44.0141
                  23.726 43.9999C19.8435 43.9857 16.2011 41.7767 11.9601 37.8418C11.3425 37.2688 11 36.4624 11 35.6309C11
                  34.0943 12.1487 32.787 13.6894 32.6164Z"
                  fill="#333333"
              />
              <path
                  d="M32 20C32 24.4183 28.4183 28 24 28C19.5817 28 16 24.4183 16 20C16 15.5817 19.5817 12 24 12C28.4183
                  12 32 15.5817 32 20Z"
                  fill="#333333"
              />
              <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 26C27.3137 26 30 23.3137 30 20C30 16.6863 27.3137 14 24 14C20.6863 14 18 16.6863 18 20C18
                  23.3137 20.6863 26 24 26ZM24 28C28.4183 28 32 24.4183 32 20C32 15.581728.4183 12 24 12C19.5817 12 16
                  15.5817 16 20C16 24.4183 19.5817 28 24 28Z"
                  fill="#333333"
              />
            </svg>
            <svg
                v-if="isAuthenticated"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="flex-1"
            >
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
              <polyline points="10 17 15 12 10 7"></polyline>
              <line x1="15" y1="12" x2="3" y2="12"></line>
            </svg>
            {{ isAuthenticated ? 'Logout' : 'Login' }}
          </router-link>
          <dark-mode class="self-center font-semibold italic"></dark-mode>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { auth } from "@/services/auth";
import { StoreVars } from "@/components/shop/shop-item/StoreVars";
import DarkMode from "@/components/shared/header/darkMode.vue";

export default {
  name: 'app-navbar',
  components: { DarkMode },
  computed: {
    products() {
      return StoreVars().storageProduct;
    },
    isAuthenticated() {
      return auth.state.isAuthenticated;
    },
    role() {
      return auth.state.role;
    }
  },
  methods: {
    logout() {
      if (this.isAuthenticated === true) {
        auth.logout();
      }
    }
  }
};
</script>

<style>
.login-icon {
  @apply inline-block w-6 h-6;
}

.login-icon i {
  @apply text-gray-500;
}
</style>
