<template>
  <button @click="getAllUsers">GetAllUsers</button>
  <p></p>
  <button @click="getUserById('4a3addaa-6926-487c-a865-bbaad603be45')">GetUserById</button>
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
        const config = {
          headers: { Authorization: `Bearer ${this.token}`}
        };
        const response = await axios.get('http://localhost:8080/api/v1/storageProducts/findAll', config);
        this.shopItems = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getAllUsers() {
      try {
        const config = {
          headers: { Authorization: `Bearer ${this.token}`}
        };
        const response = await axios.get('http://localhost:8080/api/v1/users', config);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getUserById(id) {
      try {
        const config = {
          headers: { Authorization: `Bearer ${this.token}`}
        };
        const response = await axios.get('http://localhost:8080/api/v1/users/' + id, config);
        console.log(response.data);
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
