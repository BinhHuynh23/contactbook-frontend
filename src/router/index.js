import { createRouter, createWebHistory } from 'vue-router';
import ContactBook from "@/views/ContactBook.vue";

const routes = [
 {
 path: "/",
 name: "contactbook",
 component: ContactBook,
 },

 {
  path: "/:pathMatch(.*)*",
  name: "not-found",
  component: () => import("@/views/NotFound.vue"),
  },

  {
    path: "/contacts/add",
    name: "contact.add",
    component: () => import("@/views/ContactAdd.vue"),
  },

  {
    path: "/contacts/:id",
    name: "contact.edit",
    component: () => import("@/views/ContactEdit.vue"),
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;