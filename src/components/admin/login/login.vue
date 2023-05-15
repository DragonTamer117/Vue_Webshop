<template>
  <div>
      <LoginForm></LoginForm>
  </div>
</template>

<script>
import axios from "axios";
import LoginForm from "@/components/admin/login/login-form/login-form.vue";

export default {
    name: "login-component",
    components: {LoginForm},
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
        },
        async getAllUsers() {
            try {
                const config = {
                    headers: { Authorization: `Bearer ${this.token}`}
                };
                const response = await axios.get('http://localhost:8080/api/v1/users', config);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        },
        async getUserById(id) {
            try {
                const config = {
                    headers: { Authorization: `Bearer ${this.token}`}
                };
                const response = await axios.get('http://localhost:8080/api/v1/users/' + id, config);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }
    },
    mounted() {
        this.getShopItems();
    }
}
</script>

<style scoped>

</style>