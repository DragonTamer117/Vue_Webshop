import { createRouter, createWebHistory } from 'vue-router';
import ShopContent from "@/components/shop/shop-content.vue";
import Login from "@/components/shared/login/login.vue";
import Register from "@/components/shared/login/register/register.vue";
import Admin from "@/components/account/admin/admin.vue";
import Customer from "@/components/account/customer/customer.vue";
import ShoppingCart from "@/components/shared/order/shopping-cart.vue";
import { auth } from "@/services/auth";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { name: 'shop-content', path: '/', meta: { needsAuth: false }, components: { default: ShopContent } },
        { name: 'login-component', path: '/login', meta: { needsAuth: false }, components: { default: Login } },
        { name: '', path: '/order', meta: { needsAuth: false }, components: { default: ShoppingCart } },
        { name: 'register-component', path: '/register', meta: { needsAuth: false }, components: { default: Register } },
        { name: 'admin-component', path: '/admin', meta: { needsAuth: true }, components: { default: Admin } },
        { name: 'customer-component', path: '/account', meta: { needsAuth: true }, components: { default: Customer } }
    ],
    linkActiveClass: 'active',
    scrollBehavior(_, _2, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        return { left: 0, top: 0 };
    }
});

router.beforeEach(function(to, from, next) {
    if (to.meta.needsAuth) {
        if (auth.state.isAuthenticated) {
            next();
        } else {
            next('/');
        }
    } else {
        next();
    }
});

router.afterEach(function() {
    // console.log('Global afterEach');
    // console.log(to, from);
});

export default router;