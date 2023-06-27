<template>
  <a class="relative block py-3 px-6 b-px border border-r-0 border-l-0 border-gray-300 no-underline clearfix">
    <div class="list-group-item-heading">
      <div class="flex flex-wrap ">
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
          <div class="flex flex-wrap ">
            <p class="text-lg font-semibold text-blue-400">&euro; {{ storageProduct.price }},-</p>
          </div>
          <div class="flex flex-wrap ">
            <span class="pull-right">
              <button
                  class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap
                  rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600 onAddToCart"
                  @click=addProductToOrder(this.storageProduct)
              >
                Add to cart
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
import { StoreVars } from "@/components/shop/shop-item/StoreVars";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
  name: "shop-item",
  components: { },
  props: ['storageProduct'],
  methods: {
    addProductToOrder() {
      const store = StoreVars();
      store.storageProduct.push(this.storageProduct);
      toast.success("Toegevoegd tot de winkelwagen!", {
        autoClose: 2000,
        position: "bottom-right",
        closeOnClick: true,
        closeButton: true,
        delay: 250
      });
    }
  }
}
</script>