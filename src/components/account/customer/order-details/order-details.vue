<template>
  <div class="bg-gray-100">
    <header class="bg-white shadow">
      <div class="container mx-auto px-4 py-6">
        <h1 class="text-3xl font-bold text-gray-800">Order Details</h1>
      </div>
    </header>
    <main class="container mx-auto px-4 py-6">
      <div class="bg-white shadow rounded-lg p-6">
        <h2 class="text-xl font-bold mb-0 mt-0">Order Information</h2>
        <div v-if="orders.length === 0">
          <p class="text-gray-500">No orders found.</p>
        </div>
        <div v-else>
          <table class="table-auto w-full">
            <thead>
            <tr>
              <th class="px-4 py-2">Order ID</th>
              <th class="px-4 py-2">Date</th>
              <th class="px-4 py-2">Products</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="order in orders" :key="order.id">
              <td class="border px-4 py-2">{{ order.id }}</td>
              <td class="border px-4 py-2">{{ formatDate(order.date) }}</td>
              <td class="border px-4 py-2">
                <div class="product-tile" :class="{ 'expanded': order.expanded }">
                  <p>{{ order.products[0].name }} - &euro;{{ order.products[0].price }}</p>
                  <div v-if="order.expanded" class="more-products">
                    <p v-for="product in order.products.slice(1)" :key="product.id">{{ product.name }} - &euro;{{ product.price }}</p>
                  </div>
                  <div class="justify-center flex">
                    <button @click="toggleProductList(order)" class="mt-2 text-blue-500 hover:underline focus:outline-none">
                      {{ order.expanded ? 'Show Less' : 'Show More' }}
                    </button>
                  </div>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { auth } from "@/services/auth"

export default defineComponent({
  name: "order-details",
  computed: {
    orders() {
      return auth.state.userOrders
    },
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      if (!dateString) {
        return "Not created!"
      } else {
        return date.toLocaleString()
      }
    },
    toggleProductList(order) {
      order.expanded = !order.expanded
    },
  },
})
</script>

<style scoped>
.product-tile {
  overflow: hidden;
  transition: max-height 0.3s ease;
  max-height: 50px; /* Adjust the initial height as needed */
}

.product-tile.expanded {
  max-height: none;
}

.more-products {
  margin-top: 10px;
}
</style>
