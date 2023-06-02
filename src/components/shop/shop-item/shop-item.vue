<template>
  <a
      class="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline clearfix">
    <div class="list-group-item-heading">
      <div class="flex flex-wrap ">
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
          <div class="flex flex-wrap ">
            <h4>{{ storageProduct.name }}</h4> <br>
            <h4>&euro;&nbsp;{{ storageProduct.price }}</h4>

          </div>
          <div class="flex flex-wrap ">
            <span class="pull-right">
              <button
                  class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap
                  rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600 onAddToCart"
                  @click=addProductToOrder(this.storageProduct)
              >
                In Winkelwagen
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
// import mitt from 'mitt'

// const emitter = mitt()

import {StoreVars} from "@/components/shop/shop-item/StoreVars";
// const store = StoreVars();
export default {
  name: "shop-item",
  components: { },
  props: ['storageProduct'],
  methods: {
    addProductToOrder() {
      const store = StoreVars();
      console.log(this.storageProduct);
      store.storageProduct.push(this.storageProduct);
      console.log(store.storageProduct);
      // emitter.emit("addProductToOrder", this.storageProduct);
    }
  }
}
</script>