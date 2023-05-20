<template>
    <form @submit.prevent="submitForm">
        <base-card>
            <div class="form-control">
                <label for="email">Email</label>
                <input type="text" id="email" v-model.trim="email">
            </div>
            <div class="form-control">
                <label for="password">Password</label>
                <input type="password" id="password" v-model.trim="password">
            </div>
            <button @click="submitForm()">Login</button>
            <button type="button" mode="flat">Register</button>
        </base-card>
    </form>
</template>


<script>
import axios from "axios";

export default {
    name: "login-component",
    data() {
        return {
            email: "",
            password: "",
            loggedInCheck: Boolean,
            formIsValid: true,
            mode: "login",
            token: "",
        }
    },
    methods: {
        async submitForm() {
            try {
                this.token = "";
                this.formIsValid = true;
                if ( !this.email.includes("@") || this.email.isEmpty ||
                    this.password.isEmpty || this.password.length < 6) {
                    return this.formIsValid = false;
                }

                const authenticationRequest = {
                    email: this.email,
                    password: this.password
                }

                const { data } = await axios.post('http://localhost:8080/api/v1/auth/login', authenticationRequest);
                this.token = data.token;
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