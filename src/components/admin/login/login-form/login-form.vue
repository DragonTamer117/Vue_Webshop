<template>

</template>

<script setup>
import axios from "axios";

export default {
    name: "login-form",
    data() {
        return {
            shopItems: [],
            inputValue: "",
        }
    },
    methods: {
        async getShopItems() {
            try {
                const config = {
                    headers: { Authorization: `Bearer ${this.token}`}
                };
                const response = await axios.get('http://localhost:8080/api/v1/storageProducts/findAll', config);
                this.shopItems = response.data;
            } catch (error) {
                console.error(error);
            }
        }
}
</script>

<style scoped>

</style>