<template>
  <div class="app" role="application">
    <Header />
    <div class="layout">
      <SidebarLeft />
      <main class="center">
        <router-view />
      </main>
      <SidebarRight />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import SidebarLeft from './components/SidebarLeft.vue'
import SidebarRight from './components/SidebarRight.vue'
import Footer from './components/Footer.vue'
</script>