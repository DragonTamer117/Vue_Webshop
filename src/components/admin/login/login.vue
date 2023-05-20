<template>
    <form>
        <div class="form-control">
            <label for="email">E-mail</label>
            <input type="email" id="email">
        </div>
        <div class="form-control">
            <label for="password">password</label>
            <input type="password" id="password">
        </div>
        <base-button> Login </base-button>
        <base-Button type="button" mode="flat"> register</base-Button>
    </form>
</template>

<script>
import axios from "axios";
import { AuthenticationRequest } from "@/components/core/models/AuthenticationRequest";

export default {
    name: "login-component",
    data() {
        return {
            loggedInCheck: Boolean,
            authenticationRequest: AuthenticationRequest
        }
    },
    methods: {
        async loginUser() {
            try {
                this.authenticationRequest.email = "SysAdmin@users.com";
                this.authenticationRequest.password = "sysadmin";

                const response = await axios.get('http://localhost:8080/api/v1/auth/login',this.authenticationRequest);
                this.shopItems = response.data;
            } catch (error) {
                console.error(error);
            }
        }
    },
    mounted() {
        this.loginUser();
    }
}
</script>

<style scoped>

</style>