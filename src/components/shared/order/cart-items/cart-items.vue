<template>
  <a class="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline clearfix">
    <div class="list-group-item-heading">
      <div class="flex flex-wrap">
        <div class="sm:w-1/2 pr-4 pl-4">
        <span class="pull-left">
          <img
              :src="storageProduct.imageUrl"
              alt="{{ storageProduct.name }}"
              class="img-responsive"
              style="max-height: 200px;">
        </span>
        </div>
        <div class="sm:w-1/2 pr-4 pl-4">
          <div class="flex flex-col ">
            <p>{{ storageProduct.name }}</p>
            <p>&euro; {{ storageProduct.price }}</p>
            <button @click="removeFromOrder(storageProduct)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                   class="bi bi-trash border hover:text-red-500 hover:border-red-500 h-6 w-6"
                   viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5
                0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0
                1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0
                1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
import { defineComponent } from 'vue';
import { StoreVars } from "@/components/shop/shop-item/StoreVars";

export default defineComponent({
  name: "cart-items",
  props: ['storageProduct'],
  methods: {
    removeFromOrder(storageProduct) {
      StoreVars().storageProduct.pop(storageProduct.id);
      if (this.$parent.$data.totalPrice > 0) {
        this.$parent.$data.totalPrice -= storageProduct.price;
      } else {
        this.$parent.$data.totalPrice = 0;
      }
    }
  }
})
</script>


<style>

</style>