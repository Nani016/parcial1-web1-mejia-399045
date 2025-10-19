<template>
  <div class="app" role="application">
    <Header @toggle-sidebar="sidebarOpen = !sidebarOpen" />
    <div class="layout">
      <SidebarLeft :open="sidebarOpen" @update:open="val => sidebarOpen = val" />
      <main class="center">
        <router-view />
      </main>
      <SidebarRight />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import SidebarLeft from './components/SidebarLeft.vue'
import SidebarRight from './components/SidebarRight.vue'

const sidebarOpen = ref(false)
</script>