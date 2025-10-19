<template>
  <div class="card">
    <h3>Photos</h3>
    <div class="photos-grid">
      <img v-for="(src, i) in photos" :key="i" :src="src" loading="lazy" />
    </div>
  </div>
</template>

<script setup>
const photos = Array.from({ length: 9 }).map((_, i) => `https://picsum.photos/seed/fb${i+1}/600/400`)
</script>