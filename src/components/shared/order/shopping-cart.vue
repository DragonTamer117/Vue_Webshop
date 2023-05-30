<template>
  <div v-if="orders.isEmpty || orders.length < 1">
    <p>
      there are no order!
    </p>
    <button @click="getProductsFromOrder()">get orders</button>
  </div>
  <div v-if="orders.length >= 1">
    <p>
      there are order(s)!
    </p>
  </div>
</template>

<script>

import ShopItem from "@/components/shop/shop-item/shop-item.vue";
import {StoreVars} from "@/components/shop/shop-item/StoreVars";
import Payment from "@/components/shared/order/payment/payment.vue";

export default {
  name: "shopping-cart-component",
  // eslint-disable-next-line vue/no-unused-components
  components: {ShopItem, Payment, },
  props: ['storageProduct'],
  data() {
    return {
      orders: [],
    }
  },
  methods: {
    getProductsFromOrder() {
      const store = StoreVars();
      this.orders = store.orders;
      console.log(this.orders);
    }
  }
}
</script>

<style scoped>

</style>