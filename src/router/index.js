import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../pages/Home/HomePage.vue";
import CityPage from "../pages/City/CityPage.vue";

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomePage,
        },
        {
            path: "/City",
            name: "City",
            component: CityPage,
        },
    ],
});

export default router;