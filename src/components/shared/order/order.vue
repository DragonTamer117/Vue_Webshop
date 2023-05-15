<template>

</template>

<script>
import orderItem from "@/components/shared/order/order-item/order-item.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "order",
  // eslint-disable-next-line vue/no-unused-components
  components: {orderItem},
  data(){
    return {
      orders: [],

    }
  },
  methods: {
    addProductToCart() {

    },

    deleteProductFormCart() {

    },

    async sendOrder() {
    //   let bikeModelIds: number[] = [];
    //   for (let i = 0; i < this.bikesInCart.length; i++) {
    //     bikeModelIds.push(this.bikesInCart[i].bikeModel.bikeModelId);
    //   }
    //   let sendOrderRequest = new BikeOrderSendRequest(bikeModelIds, this.authService.authenticatedUser);
    //   let shopUserId: number = this.authService.authenticatedUserView.shopUserId;
    //   this.http.post<number>(this.apiService.apiUrl+'bikeOrder/'+shopUserId,sendOrderRequest)
    //       .subscribe(response => {
    //         this.responseBikeOrderId = response;
    //         this.sendSuccess = true;
    //       },(error => {
    //         this.errorMessage = error;
    //       }));
    //   while (!this.sendSuccess) {
    //     await this.delay(10);
    //   }
    //   this.bikesInCart = [];
    //   this.totalOrderPrice = 0;
    //   return this.responseBikeOrderId;
    }
  }
}
</script>

<style scoped>

</style>