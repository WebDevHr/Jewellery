import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactView.vue"),
  },
  {
    path: "/aboutus",
    name: "aboutus",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutUs.vue"),
  },
  {
    path: "/category",
    name: "category",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CategoryView.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TestView.vue"),
  },

  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignupView.vue"),
  },
  {
    path: "/products/:key",
    name: "products",
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProductsView.vue"),
  },
  {
    path: "/product/:id",
    name: "product",
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProductView.vue"),
    beforeEnter(routeTo, routeFrom, next) {
      store
        .dispatch("fetchProduct", routeTo.params.id)
        .then((product) => {
          routeTo.params.product = product;
          next();
        })
        .catch((error) => {
          if (error.response && error.response.status == 404) {
            next({ name: "404", params: { resource: "event" } });
          } else {
            next({ name: "network-issue" });
          }
        });
    },
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
