<template>
    <div v-if="loggedInCheck === false">
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form @submit.prevent="submitForm" class="space-y-4 md:space-y-6" action="#">
                            <base-card>
                                <div class="form-control">
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" v-model.trim="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
                                </div>
                                <div class="form-control">
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" v-model.trim="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                                </div>
                                <button @click="submitForm()" type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <a href="/register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                                </p>
                            </base-card>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <div v-if="loggedInCheck === true">
        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
            Do you want to logout? <a @click="logout()" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Yes!</a>
        </p>
    </div>
</template>


<script>
import axios from "axios";
import router from "@/router";

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
                this.loggedInCheck = false;
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
                this.loggedInCheck = true;
                await router.push({ path: '/' })
            } catch (error) {
                console.error(error);
            }
        },
        logout() {
            if (this.loggedInCheck === true) {
                this.token = "";
                return this.loggedInCheck = false;
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