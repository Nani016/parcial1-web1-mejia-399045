<template>
  <div class="card">
    <h3>Boxes (Estadísticas)</h3>
    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px">
      <div v-for="b in boxes" :key="b.title" style="padding:12px;border-radius:8px;background:#fbfbff;border:1px solid #eef2ff">
        <div style="font-size:18px;font-weight:700">{{ b.value }}</div>
        <div style="color:var(--muted)">{{ b.title }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const boxes = [
  { title: 'Amigos', value: 256 },
  { title: 'Publicaciones', value: 43 },
  { title: 'Reacciones', value: 1024 },
  { title: 'Grupos', value: 12 }
]
</script>