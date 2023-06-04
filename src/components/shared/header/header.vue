<template>
  <nav class="bg-white border-gray-200 px-2 sm:px-4 dark:bg-sky-900">
    <div class="container flex flex-wrap items-center justify-between">
      <a class="flex items-center">
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white italic pl-20">EbikeNL</span>
      </a>
      <div class="group-aria-hidden:w-full md:block md:w-auto">
        <ul
            class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg dark:bg-sky-900 md:flex-row md:space-x-8 md:mt-0
        md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-600 md:dark:bg-sky-900 dark:border-gray-700"
        >
          <router-link :to="{ path: `/` }"
              class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0
          md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white
          md:dark:hover:bg-transparent"
          >
            Shop
          </router-link>
          <router-link :to="{ path: `login` }"
              class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0
          md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white
          md:dark:hover:bg-transparent active:text-bg-gray-900"
          >
            Login
          </router-link>
          <router-link :to="{ path: 'order' }" class="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
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
              text-sm  leading-tight text-center" v-if="storageProduct.length !== 0"
              >
                {{ storageProduct.length }}
              </span>
            </button>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { StoreVars } from "@/components/shop/shop-item/StoreVars";

export default {
  name: 'app-navbar',
  data() {
    return {
      storageProduct: []
    }
  },
  methods: {
    getProductsFromOrder() {
      this.storageProduct = StoreVars().storageProduct;
    }
  },
  beforeMount() {
    this.getProductsFromOrder();
  }
};
</script>

<style>
</style>
