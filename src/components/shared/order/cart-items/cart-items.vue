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
        </div>
      </div>
    </div>
  </a>
</template>
<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "cart-items",
  props: ['storageProduct'],
})
</script>


<style>

</style>