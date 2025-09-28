import { createMemoryHistory, createRouter } from 'vue-router'

import Home from './components/Home.vue'
import Contact from './components/Contact.vue'
import Classes from './components/Classes.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/contato', component: Contact },
  { path: '/aulas', component: Classes }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router