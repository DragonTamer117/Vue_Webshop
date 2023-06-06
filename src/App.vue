<template>
  <div class="flex min-h-screen flex-col h-auto m-0">
    <app-navbar class="fixed top-0 left-0 right-0 z-10"></app-navbar>
    <div class="mt-16">
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
import AppNavbar from "@/components/shared/header/header.vue";

export default {
  name: 'App',
  components: {
    AppNavbar
  }
}
</script>

<style>
</style>
