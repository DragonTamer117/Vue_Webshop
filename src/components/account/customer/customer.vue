<template>
  <account-details></account-details>
  <order-details></order-details>
</template>

<script>
import OrderDetails from "@/components/account/customer/order-details/order-details.vue";
import AccountDetails from "@/components/account/customer/account-details/account-details.vue";

export default {
  name: "customer-component",
  components: { AccountDetails, OrderDetails },
  data() {
    return {

    };
  },
  methods: {

  }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
