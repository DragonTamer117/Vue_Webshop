<template>
  <div class="flex min-h-screen flex-col h-auto m-0">
    <app-navbar></app-navbar>
    <div>
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
