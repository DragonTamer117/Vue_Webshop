<template>
  <header class="bg-white dark:bg-slate-700 shadow">
    <div class="container mx-auto px-4 py-6">
      <h1 class="text-3xl font-bold text-gray-800 dark:text-white">All Orders</h1>
    </div>
  </header>
  <div class="container mx-auto px-4 py-6">
    <div class="grid gap-8">
      <div v-for="order in orders" :key="order.id" class="border rounded-lg p-8 dark:bg-slate-700 shadow-2xl shadow-gray-200">
        <h2 class="text-lg font-bold mb-4 border border-t-0 border-r-0 border-l-0 border-gray-300">Order ID: {{ order.id }}</h2>
        <p class="mb-2">User ID: {{ order.userId }}</p>
        <p class="mb-2">Date: {{ formatDate(order.date) }}</p>
        <p class="mb-2">Status: {{ order.orderStatus }}</p>
        <div class="mt-4 border border-t-0 border-r-0 border-l-0 border-gray-300">
          <h3 class="text-md font-bold mb-2 border border-t-0 border-r-0 border-l-0 border-gray-300">Products:</h3>
          <div v-for="(product, index) in order.products" :key="product.id" class="flex items-center mb-2">
            <template v-if="index === 0 || !isSameProduct(product, order.products[index - 1])">
              <img :src="product.imageUrl" alt="Product Image" class="w-12 h-12 mr-4">
              <div>
                <p class="font-bold mb-1">{{ getProductWithQuantity(product, order.products) }}</p>
                <p class="mb-1">Category ID: {{ getCategory(product.category) }}</p>
                <p class="mb-1">Price: &euro; {{ product.price.toFixed(2) }}</p>
              </div>
            </template>
          </div>
        </div>
        <div class="mt-4">
          <h3 class="text-md font-bold mb-2">Total Price:</h3>
          <p class="mb-2">€ {{ calculateTotalPrice(order.products).toFixed(2) }}</p>
        </div>
        <div class="flex justify-end">
          <button
              class="border-2 rounded py-1 px-4 text-white font-bold border-blue-500 bg-blue-500 hover:border-blue-700 hover:bg-blue-700"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { auth } from "@/services/auth";

export default defineComponent({
  name: "admin-view",
  components: {

  },
  data() {
    return {
      currentUser: {
        email: "",
        password: "",
        dateOfBirth: "",
        firstName: "",
        middleName: "",
        lastName: "",
        street: "",
        houseNr: "",
        postalCode: "",
        city: ""
      },
      orders: []
    };
  },
  computed: {
    loadedUser() {
      return auth.state.currentUser;
    }
  },
  created() {
    this.currentUser = this.loadedUser;
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleString();
    },
    isSameProduct(productA, productB) {
      return productA.name === productB.name;
    },
    getProductWithQuantity(product, products) {
      const quantity = products.filter(p => this.isSameProduct(p, product)).length;
      return `${quantity}x ${product.name}`;
    },
    calculateTotalPrice(products) {
      return products.reduce((total, product) => total + product.price, 0);
    },
    async getCategory(id) {
      return await auth.getCategory(id).name;
    }
  },
  beforeMount() {
    auth.getAllOrders().then((response) => {
      this.orders = response.data;
    });
  }
});
</script>

<style scoped>

</style>
