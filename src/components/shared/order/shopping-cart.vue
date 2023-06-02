<template>
  <div>
    <div class="flex flex-wrap ">
      <div>
        totale kosten: {{ totalPrice }}
      </div>
      <div class="sm:w-full pr-4 pl-4">
        <cart-items
            v-for="item in storageProduct"
            v-bind:key="item.id"
            :storage-product="item"
        ></cart-items>
      </div>
    </div>
  </div>
</template>

<script>

import ShopItem from "@/components/shop/shop-item/shop-item.vue";
import {StoreVars} from "@/components/shop/shop-item/StoreVars";
import CartItems from "@/components/shared/order/cart-items/cart-items.vue";

export default {
  name: "shopping-cart-component",
  // eslint-disable-next-line vue/no-unused-components
  components: { CartItems, ShopItem },
  data() {
    return {
      storageProduct: [],
      totalPrice: 0
    }
  },
  methods: {
    async getProductsFromOrder() {
      // let order: Order;
      const store = StoreVars();
      this.storageProduct = store.storageProduct;
      console.log(this.storageProduct);
      this.calcTotalPrice();
    },
    calcTotalPrice(){
      for (let i = 0; i < this.storageProduct.length; i++) {
        let product = this.storageProduct[i];
        this.totalPrice = this.totalPrice + product.price;
      }
    }
  },
  beforeMount() {
    this.getProductsFromOrder();
  }
}
</script>

<style scoped>

</style>