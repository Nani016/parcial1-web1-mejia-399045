<template>
  <aside class="left" aria-label="Barra lateral izquierda">
    <div class="profile-card" role="region" aria-labelledby="profile-name">
      <div class="avatar">
        <img src="https://okdiario.com/img/2019/08/10/origen-del-futbol.jpg" alt="avatar" />
        <div>
          <h2 id="profile-name">Danilo Mejía</h2>
          <p>Desarrollador web</p>
        </div>
      </div>

      <nav class="menu" aria-label="Navegación del perfil">
        <router-link to="/muro" class="menu-link">🏠 Muro</router-link>
        <router-link to="/info" class="menu-link">ℹ️ Info</router-link>
        <router-link to="/photos" class="menu-link">🖼️ Photos</router-link>
        <router-link to="/boxes" class="menu-link">📦 Boxes</router-link>
      </nav>
    </div>
  </aside>
</template>