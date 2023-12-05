import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../pages/Home/HomePage.vue";
import CityPage from "../pages/City/CityPage.vue";
import DetailPage from "../pages/Detail/DetailPage.vue";

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
        {
            path: "/detail/:id",
            name: "Detail",
            component: DetailPage,
        },
    ],
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
});

export default router;