<template>
  <nav class="bg-white border-gray-200 px-2 sm:px-4 dark:bg-sky-900">
    <div class="container flex flex-wrap items-center justify-between">
      <a class="flex items-center">
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white italic pl-20">EbikeNL</span>
      </a>
      <div class="hidden w-full md:block md:w-auto">
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
          <router-link :to="{ path: `order` }"
              class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0
          md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white
          md:dark:hover:bg-transparent"
          >
            Cart
          </router-link>
          <router-link :to="{ path: `login` }"
              class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0
          md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white
          md:dark:hover:bg-transparent active:text-bg-gray-900"
          >
            Login
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'app-navbar',
  methods: {
    onProfileView() {
      this.$emit('profile-view');
    }
  }
};
</script>

<style>
</style>
