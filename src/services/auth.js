import { reactive } from "vue";
import axios from "axios";
import router from "@/router";
import { StoreVars } from "@/components/shop/shop-item/StoreVars";

class Auth {
    baseUrl = 'http://localhost:8080/api/v1/';
    state = reactive({
        isAuthenticated: false,
        isAllowedRole: false,
        role: "",
        currentUser: [],
        userOrders: []
    });

    async getCategory(id) {
        const config = {
            headers: { Authorization: `Bearer ${StoreVars().token}` }
        }

        const { data } = await axios.get(this.baseUrl + `categories/${id}`, config);
        return data;
    }

    async getAllOrders() {
        const config = {
            headers: { Authorization: `Bearer ${StoreVars().token}` }
        }

        return await axios.get(this.baseUrl + 'orders', config);
    }

    async getAllUserOrders() {
        const config = {
            headers: { Authorization: `Bearer ${StoreVars().token}` }
        }

        const allUserOrders = await axios.get(this.baseUrl + 'orders/current', config);
        this.state.userOrders = allUserOrders.data;
    }

    async getCurrentUser() {
        const config = {
            headers: { Authorization: `Bearer ${StoreVars().token}`}
        };

        const currentUser = await axios.get(this.baseUrl + 'users/current', config);

        this.state.currentUser = currentUser.data;
        this.state.role = currentUser.data.role;
    }

    async login(email, password) {
        const authenticationRequest = {
            email: email,
            password: password,
        };

        const { data } = await axios.post(this.baseUrl + "auth/login", authenticationRequest);
        StoreVars().token = data.token;

        await this.getCurrentUser();
        await this.getAllUserOrders();

        this.state.isAuthenticated = true;
        await router.push({ path: "/order" });
    }

    async logout() {
        if (this.state.isAuthenticated === true) {
            this.state.currentUser = "";
            StoreVars().token = "";
            this.state.role = "";
            this.state.isAuthenticated = false;
            await router.push({ path: "/login" });
        }
    }
}

export const auth = new Auth();
