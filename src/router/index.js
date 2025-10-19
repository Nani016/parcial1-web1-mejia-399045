import { createRouter, createWebHistory } from 'vue-router'
import MuroView from '../views/MuroView.vue'
import InfoView from '../views/InfoView.vue'
import PhotosView from '../views/PhotosView.vue'
import BoxesView from '../views/BoxesView.vue'

const routes = [
  { path: '/', redirect: '/muro' },
  { path: '/muro', component: MuroView },
  { path: '/info', component: InfoView },
  { path: '/photos', component: PhotosView },
  { path: '/boxes', component: BoxesView },
]

export default createRouter({
  history: createWebHistory(),
  routes
})