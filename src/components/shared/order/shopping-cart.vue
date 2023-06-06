<template>
  <div v-if="token.length >= 1" class="flex flex-col items-center relative">
    <div class="sm:w-full">
      <cart-items
          v-for="item in storageProduct"
          v-bind:key="item.id"
          :storage-product="item"
      ></cart-items>
    </div>
    <div class="right-0 bottom-3 mr-4 mt-4 fixed">
      <div class="text-center font-bold">
        Totale kosten: &euro; {{ totalPrice }},-
      </div>
      <button
          :class="[
              'inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 ' +
              'px-3 leading-normal no-underline',
              storageProduct.length > 0 ? 'bg-blue-600 text-white hover:bg-blue-600' : 'bg-gray-400 text-gray-600 cursor-not-allowed'
              ]"
          @click="sendOrder(storageProduct)"
          :disabled="storageProduct.length < 1"
      >
        Bestellen
      </button>
    </div>
  </div>
  <div v-if="token.length <= 0" class="flex flex-col items-center justify-center h-screen">
    <router-link
        :to="{ path: `login` }"
        class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap
                  rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600"
    >
      U moet inloggen of de bestelling af te ronden.
    </router-link>
  </div>
</template>

<script>
import { StoreVars } from "@/components/shop/shop-item/StoreVars";
import CartItems from "@/components/shared/order/cart-items/cart-items.vue";
import axios from "axios";

export default {
  name: "shopping-cart-component",
  components: { CartItems },
  data() {
    return {
      storageProduct: [],
      totalPrice: 0,
      token: ""
    }
  },
  methods: {
    async getProductsFromOrder() {
      const store = StoreVars();
      this.storageProduct = store.storageProduct;
      this.calcTotalPrice();
    },
    calcTotalPrice() {
      for (let i = 0; i < this.storageProduct.length; i++) {
        let product = this.storageProduct[i];
        this.totalPrice += product.price;
      }
    },
    async sendOrder() {
      const config = {
        headers: { Authorization: `Bearer ${StoreVars().token}`}
      };
      const requestBody = {
        products: this.storageProduct.map(product => product.id)
      }

      console.log(config);

      await axios.post('http://localhost:8080/api/v1/orders', requestBody, config).then(() => {
        this.storageProduct = [];
        StoreVars().storageProduct = [];
        this.totalPrice = 0;
      });
    }
  },
  beforeMount() {
    this.getProductsFromOrder();
    this.token = StoreVars().token;
  }
}
</script>

<style scoped>

</style>