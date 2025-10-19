<template>
  <header class="app-header" role="banner">
    <div class="brand" aria-hidden="true">
      <button class="menu-toggle" aria-label="Abrir menú" @click="$emit('toggle-sidebar')">☰</button>
      <div class="logo">facebook</div>
    </div>
    <div class="search" role="search">
      <input id="search" type="search" placeholder="Buscar en Facebook" aria-label="Buscar" />
    </div>
    <div class="actions" aria-hidden="true">
      <div class="icon">🔔</div>
      <div class="icon">✉️</div>
      <div class="icon">👤</div>
    </div>
  </header>
</template>