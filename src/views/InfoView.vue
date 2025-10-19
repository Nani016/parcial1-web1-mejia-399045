<template>
  <div class="card">
    <h3>Información</h3>
    <dl class="info">
      <template v-for="(v, k) in info" :key="k">
        <dt>{{ k }}</dt>
        <dd>{{ v }}</dd>
      </template>
    </dl>
  </div>
</template>

<script setup>
const info = {
  Trabajo: 'Desarrollador Frontend',
  Ubicación: 'Cali, Colombia',
  Educación: 'Universidad'
}
</script>