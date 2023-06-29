<template>
  <a class="relative block py-3 px-6 b-px border border-r-0 border-l-0 border-gray-300 no-underline clearfix">
    <div class="list-group-item-heading">
      <div class="flex flex-wrap">
        <div class="sm:w-1/2 pr-4 pl-4">
          <h1 class="font-bold text-2xl">{{ storageProduct.name }}</h1>
          <span class="pull-left">
            <img
                :src="storageProduct.imageUrl"
                alt="{{ storageProduct.name }}"
                class="img-responsive border"
                style="max-height: 200px;"
            />
          </span>
        </div>
        <div class="sm:w-1/2 pr-4 pl-4">
          <div class="flex flex-col">
            <p class="text-lg font-semibold text-blue-400">&euro; {{ storageProduct.price }},-</p>
            <p class="flex items-center mb-2">
              <button @click="decreaseQuantity(storageProduct)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 rounded">
                -
              </button>
              <span class="mx-2 px-2 border dark:bg-white dark:text-black">{{ getProductCount(storageProduct.id) }}</span>
              <button @click="increaseQuantity(storageProduct)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 rounded">
                +
              </button>
            </p>
          </div>
          <button @click="removeAllProducts(storageProduct)">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash border hover:text-red-500 hover:border-red-500 h-6 w-6"
                viewBox="0 0 16 16"
            >
              <path
                  d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5
                  0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
              />
              <path
                  fill-rule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0
                  1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0
                  1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </a>
  <div v-if="showConfirmationModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-6 rounded">
      <p class="text-black">Are you sure you want to delete all products?</p>
      <div class="mt-4 flex justify-end">
        <button @click="cancelAction" class="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
          Cancel
        </button>
        <button @click="deleteAllProducts" class="bg-red-500 hover:bg-red-700 text-white font-bold px-4 py-2 rounded">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { StoreVars } from "@/components/shop/shop-item/StoreVars";
import { toast } from "vue3-toastify";
import 'vue3-toastify/dist/index.css';

export default defineComponent({
  name: "cart-items",
  props: ['storageProduct'],
  data() {
    return {
      showConfirmationModal: false
    };
  },
  methods: {
    increaseQuantity(storageProduct) {
      StoreVars().storageProduct.push(storageProduct);
      this.$parent.$data.totalPrice += storageProduct.price;
    },
    decreaseQuantity(storageProduct) {
      const index = StoreVars().storageProduct.findIndex(product => product.id === storageProduct.id);
      if (index !== -1) {
        if (this.getProductCount(storageProduct.id) === 1) {
          this.showConfirmationModal = true;
        } else {
          StoreVars().storageProduct.splice(index, 1);
          this.$parent.$data.totalPrice -= storageProduct.price;
        }
      }
    },
    deleteAllProducts() {
      const index = StoreVars().storageProduct.findIndex(product => product.id === this.storageProduct.id);
      if (index !== -1) {
        const removedProducts = StoreVars().storageProduct.splice(index, StoreVars().storageProduct.length);
        const totalPrice = removedProducts.reduce((total, product) => total + product.price, 0);
        this.$parent.$data.totalPrice -= totalPrice;

        toast.warn(`De product is verwijderd!`, {
          autoClose: 2000,
          position: "bottom-right",
          closeOnClick: true,
          closeButton: true,
          delay: 250
        });
      }

      this.showConfirmationModal = false;
    },
    getProductCount(productId) {
      return StoreVars().storageProduct.filter(product => product.id === productId).length;
    },
    removeAllProducts() {
      this.showConfirmationModal = true;
    },
    cancelAction() {
      this.showConfirmationModal = false;
    },
  }
});
</script>

<style>

</style>
