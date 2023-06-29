<template>
  <div v-if="token.length >= 1" class="flex flex-col items-center relative">
    <div class="sm:w-full pl-4 pr-4">
      <div v-if="storageProduct.length === 0" class="flex flex-col items-center mt-20 md:mt-72">
        <p class="text-gray-600 dark:text-white my-4">
          Uw winkelwagen is leeg!
        </p>
        <router-link
            :to="{ path: '/'}"
            class="inline-block px-4 py-2 text-center text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Terug naar de Webwinkel
        </router-link>
      </div>
      <cart-items
          v-for="(item, index) in getUniqueProducts()"
          :key="index"
          :storage-product="item"
      ></cart-items>
    </div>
    <div class="right-0 bottom-3 mr-4 mt-4 fixed shadow-2xl border-2 rounded-xl p-3 border-blue-500">
      <p>Totale kosten: <b>&euro; {{ totalPrice }},-</b></p>
      <p>Artikelen: <b>{{ storageProduct.length }}</b></p>
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
  <div v-if="token.length <= 0" class="flex flex-col items-center font-semibold justify-center h-screen">
    <p class="bg-yellow-200 text-yellow-800 p-4 rounded-lg shadow-md mb-4 underline font-italic">
      You have to be logged in before you can place an order.
    </p>
    <router-link
        :to="{ path: `login` }"
        class="inline-block text-center select-none border font-normal whitespace-no-wrap font-semibold
            rounded py-2 px-4 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-700"
    >
      Go to Login
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
      console.log(requestBody);

      await axios.post('http://localhost:8080/api/v1/orders', requestBody, config).then(() => {
        this.storageProduct = [];
        StoreVars().storageProduct = [];
        this.totalPrice = 0;
      });
    },
    getUniqueProducts() {
      const uniqueProducts = [];
      const addedProductIds = [];

      for (const product of this.storageProduct) {
        if (!addedProductIds.includes(product.id)) {
          uniqueProducts.push(product);
          addedProductIds.push(product.id);
        }
      }

      return uniqueProducts;
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