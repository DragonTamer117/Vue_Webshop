<template>
    <form @submit.prevent="submitForm">
        <base-card>
            <div class="form-control">
                <label for="email">E-mail</label>
                <input type="email" id="email" v-model.trim="email">
            </div>
            <div class="form-control">
                <label for="password">password</label>
                <input type="password" id="password" v-model.trim="password">
            </div>
            <base-button @click="submitForm()"> Login </base-button>
            <base-Button type="button" mode="flat"> register</base-Button>
        </base-card>
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
            email: "",
            password: "",
            formIsValid: true,
            mode: "login",
            authenticationRequest: AuthenticationRequest
        }
    },
    methods: {
        async submitForm() {
            try {
                this.formIsValid = true;
                if ( !this.email.includes("@") || this.email.isEmpty ||
                    this.password.isEmpty || this.password.length < 6) {
                    return this.formIsValid = false;
                }
                this.authenticationRequest.email = this.email;
                this.authenticationRequest.password = this.password;

                const response = await axios.get('http://localhost:8080/api/v1/auth/login',this.authenticationRequest);
                this.shopItems = response.data;
            } catch (error) {
                console.error(error);
            }
        }
    },
    mounted() {
        this.submitForm();
    }
}
</script>

<style scoped>

</style>