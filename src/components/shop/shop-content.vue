<template>
  <div class="flex flex-wrap ">
    <div class="sm:w-full pr-4 pl-4">
      <div class="relative px-3 py-3 mb-4 border rounded bg-red-200 border-red-300 text-red-800" v-if="shopItems.length === 0">
        <p><strong>Probleem met laden van de WinkelInhoud</strong></p>
      </div>
      <shop-item
          v-for="item in shopItems"
          v-bind:key="item.id"
          :storage-product="item"
      ></shop-item>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ShopItem from "@/components/shop/shop-item/shop-item.vue";

export default {
  name: "shop-content",
  components: { ShopItem },
  data() {
    return {
      shopItems: [],
      inputValue: "",
      token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTeXNBZG1pbkB1c2Vycy5jb20iLCJleHAiOjE2ODQyMzI2MDIsImlhdCI6MTY4NDE0NjIwMn0.9AEvjAfOYoH4vEd_Db-DH36YFaj4_tf3Glc1xXjn8IQ"
    }
  },
  methods: {
    async getShopItems() {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/storageProducts');
        this.shopItems = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  },
  mounted() {
    this.getShopItems();
  }
}
</script>

<style>

</style>
