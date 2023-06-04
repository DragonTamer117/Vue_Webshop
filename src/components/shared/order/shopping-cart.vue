<template>
  <div v-if="this.token.length >= 1" class="flex flex-col items-center">
    <div class="sm:w-full pr-4 pl-4">
      <cart-items
          v-for="item in storageProduct"
          v-bind:key="item.id"
          :storage-product="item"
      ></cart-items>
    </div>
    <div class="flex flex-wrap items-center">
      <div class="text-center mx-auto mb-4 font-bold mt-4 mr-4">
        Totale kosten: &euro; {{ totalPrice }},-
      </div>
      <div class="text-center mx-auto">
        <button
            class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap
                  rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600 onAddToCart"
            @click="sendOrder(storageProduct)"
        >
          Bestellen
        </button>
      </div>
    </div>
  </div>
  <div v-if="this.token.length <= 0" class="flex flex-col items-center justify-center h-screen">
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
      token: ''
    }
  },
  methods: {
    async getProductsFromOrder() {
      // let order: Order;
      const store = StoreVars();
      this.storageProduct = store.storageProduct;
      this.calcTotalPrice();
    },
    calcTotalPrice() {
      for (let i = 0; i < this.storageProduct.length; i++) {
        let product = this.storageProduct[i];
        this.totalPrice = this.totalPrice + product.price;
      }
    },
    sendOrder(){
      const config = {
        headers: { Authorization: `Bearer ${this.token}`}
      };
      const requestBody = {
        products: this.storageProduct.map(product => product.id)
      }

      console.log(config);

      axios.post('http://localhost:8080/api/v1/orders', requestBody, config);
    },
    getToken() {
      const store = StoreVars();
      this.token = store.token;
    }
  },
  beforeMount() {
    this.getProductsFromOrder();
    this.getToken();
  }
}
</script>

<style scoped>

</style>