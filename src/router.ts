import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './components/Home.vue'
import ContactView from './components/Contact.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/contato', component: ContactView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router