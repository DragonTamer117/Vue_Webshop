<template>
  <div>
      <LoginForm></LoginForm>
  </div>
</template>

<script>
import axios from "axios";
import LoginForm from "@/components/admin/login/login-form/login-form.vue";
import {AuthenticationRequest} from "@/components/core/models/AuthenticationRequest";

export default {
    name: "login-component",
    components: {LoginForm},
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