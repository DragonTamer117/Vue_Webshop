import { createRouter, createWebHistory } from 'vue-router';
import ShopContent from "@/components/shop/shop-content.vue";
import Login from "@/components/admin/login/login.vue";
import Register from "@/components/admin/login/register/register.vue";
import Order from "@/components/shared/order/shopping-cart.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { name: 'shop-content', path: '/', meta: { needsAuth: false }, components: { default: ShopContent } },
        { name: 'login-component', path: '/login', meta: { needsAuth: false }, components: { default: Login } },
        { name: 'register-component', path: '/register', meta: { needsAuth: false }, components: { default: Register } },
        { name: 'shopping-cart-component', path: '/order', meta: { needsAuth: true }, components: { default: Order } },
        // { name: 'shop-item', path: '/login', meta: { needsAuth: false }, components: { default: ShopItem } },
        // { name: 'shop-item', path: '/registration', meta: { needsAuth: false }, components: { default: ShopItem } },
        // { name: 'shop-item', path: '/account', meta: { needsAuth: false }, components: { default: ShopItem } },
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
        // console.log('Needs auth!');
        next();
    } else {
        next();
    }
});

router.afterEach(function() {
    // console.log('Global afterEach');
    // console.log(to, from);
});

export default router;