import { reactive } from "vue";
import axios from "axios";
import router from "@/router";
import { StoreVars } from "@/components/shop/shop-item/StoreVars";

class Auth {
    state = reactive({
        isAuthenticated: false,
        role: "",
        currentUser: [],
        userOrders: []
    });

    async getAllUserOrders() {
        const config = {
            headers: { Authorization: `Bearer ${StoreVars().token}` }
        }

        const allUserOrders = await axios.get('http://localhost:8080/api/v1/orders/current', config);
        this.state.userOrders = allUserOrders.data;
    }

    async getCurrentUser() {
        const config = {
            headers: { Authorization: `Bearer ${StoreVars().token}`}
        };

        const currentUser = await axios.get('http://localhost:8080/api/v1/users/current', config);

        this.state.currentUser = currentUser.data;
        this.state.role = currentUser.data.role;
    }

    async login(email, password) {
        const authenticationRequest = {
            email: email,
            password: password,
        };

        const { data } = await axios.post(
            "http://localhost:8080/api/v1/auth/login",
            authenticationRequest
        );
        StoreVars().token = data.token;

        await this.getCurrentUser();
        await this.getAllUserOrders();

        this.state.isAuthenticated = true;
        await router.push({ path: "/order" });
    }

    logout() {
        if (this.state.isAuthenticated === true) {
            this.state.currentUser = "";
            StoreVars().token = "";
            this.state.role = "";
            this.state.isAuthenticated = false;
        }
    }
}

export const auth = new Auth();
