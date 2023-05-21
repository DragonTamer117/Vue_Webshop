<template>
    <div v-if="login.data().loggedInCheck === false">
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create your account!
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
                                <div class="form-control">
                                    <label for="firstName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="firstName" name="firstName" id="firstName" v-model.trim="firstName" placeholder="John" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                                </div>
                                <div class="form-control">
                                    <label for="middleName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="middleName" name="middleName" id="middleName" v-model.trim="middleName" placeholder="Piers" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                                </div>
                                <div class="form-control">
                                    <label for="lastName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="lastName" name="lastName" id="lastName" v-model.trim="lastName" placeholder="Smith" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                                </div>
                                <div class="form-control">
                                    <label for="dateOfBirth" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="date" name="dateOfBirth" id="dateOfBirth" v-model.trim="dateOfBirth" placeholder="01-01-1990" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                                </div>
                                <div class="form-control">
                                    <label for="street" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="street" name="street" id="street" v-model.trim="street" placeholder="Wall Street" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                                </div>
                                <div class="form-control">
                                    <label for="houseNr" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="houseNr" name="houseNr" id="houseNr" v-model.trim="houseNr" placeholder="69" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                                </div>
                                <div class="form-control">
                                    <label for="postalCode" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="postalCode" name="postalCode" id="postalCode" v-model.trim="postalCode" placeholder="6969WB" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                                </div>
                                <div class="form-control">
                                    <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="city" name="city" id="city" v-model.trim="city" placeholder="York" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                                </div>
                                <button @click="submitForm()" type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Register</button>
                            </base-card>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import login from "@/components/admin/login/login.vue";
import axios from "axios";
import router from "@/router";

export default {
    name: "register-component",
    data() {
        return {
            email: "",
            password: "",
            role: 0,
            firstName: "",
            middleName: "",
            lastName: "",
            dateOfBirth: "",
            street: "",
            houseNr: "",
            postalCode: "",
            city: "",
            formIsValid: true
        }
    },
    methods: {
        async submitForm() {
            try {
                this.formIsValid = true;

                this.checkRegisterForm();

                const registerRequest = {
                    email: this.email,
                    password: this.password,
                    role: this.role,
                    firstName: this.firstName,
                    middleName: this.middleName,
                    lastName: this.lastName,
                    dateOfBirth: this.dateOfBirth,
                    street: this.street,
                    houseNr: this.houseNr,
                    postalCode: this.postalCode,
                    city: this.city
                }

                await axios.post('http://localhost:8080/api/v1/auth/register', registerRequest);

                await router.push({ path: '/' })
            } catch (error) {
                console.error(error);
            }
        },
        checkRegisterForm(){
            if ( !this.email.includes("@") || this.email.isEmpty ||
                this.password.isEmpty || this.password.length < 6) {
                return this.formIsValid = false;
            }
            if (this.firstName.length <= 1 || this.lastName.length <= 1) {
                return this.formIsValid = false;
            }
            if (this.street.length <= 1 ||
                this.houseNr.length <= 1 ||
                this.postalCode.length <= 1 ||
                this.postalCode.length > 6 ||
                this.city.length <= 1
            ) {
                return this.formIsValid = false;
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
    },
    computed: {
        login() {
            return login
        }
    }
}
</script>
<style scoped>

</style>