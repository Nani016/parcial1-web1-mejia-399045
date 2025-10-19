<template>
  <div>
    <!-- Sidebar fija en pantallas grandes -->
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

    <!-- Drawer para pantallas pequeñas -->
  <div class="drawer-overlay" v-if="isOpen" @click="close" aria-hidden="true"></div>
  <aside ref="drawerRef" class="drawer" :class="{open: isOpen}" role="dialog" aria-label="Navegación" tabindex="-1">
      <div class="drawer-header">
        <button class="close-btn" @click="close" aria-label="Cerrar menú">✕</button>
      </div>
      <div class="profile-card" role="region" aria-labelledby="profile-name">
        <div class="avatar">
          <img src="https://okdiario.com/img/2019/08/10/origen-del-futbol.jpg" alt="avatar" />
          <div>
            <h2 id="profile-name">Danilo Mejía</h2>
            <p>Desarrollador web</p>
          </div>
        </div>
        <nav class="menu" aria-label="Navegación del perfil">
          <router-link to="/muro" class="menu-link" @click="close">🏠 Muro</router-link>
          <router-link to="/info" class="menu-link" @click="close">ℹ️ Info</router-link>
          <router-link to="/photos" class="menu-link" @click="close">🖼️ Photos</router-link>
          <router-link to="/boxes" class="menu-link" @click="close">📦 Boxes</router-link>
        </nav>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'
const props = defineProps({ open: { type: Boolean, default: false } })
const emit = defineEmits(['update:open'])
const isOpen = ref(props.open)

const drawerRef = ref(null)
const previouslyFocused = ref(null)

function getFocusableElements(container) {
  if (!container) return []
  const selectors = [
    'a[href]',
    'area[href]',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'button:not([disabled])',
    'iframe',
    'object',
    'embed',
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable]'
  ]
  return Array.from(container.querySelectorAll(selectors.join(','))).filter(el => el.offsetParent !== null)
}

function onKeyDown(e) {
  if (!isOpen.value) return
  if (e.key === 'Escape') {
    e.preventDefault()
    close()
    return
  }
  if (e.key === 'Tab') {
    const focusables = getFocusableElements(drawerRef.value)
    if (focusables.length === 0) {
      e.preventDefault()
      return
    }
    const first = focusables[0]
    const last = focusables[focusables.length - 1]
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault()
        last.focus()
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
  }
}

function openDrawer() {
  previouslyFocused.value = document.activeElement
  nextTick(() => {
    const focusables = getFocusableElements(drawerRef.value)
    if (focusables.length) {
      focusables[0].focus()
    } else if (drawerRef.value) {
      drawerRef.value.focus()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
  })
}

function closeDrawer() {
  document.removeEventListener('keydown', onKeyDown)
  document.body.style.overflow = ''
  if (previouslyFocused.value && previouslyFocused.value.focus) {
    try { previouslyFocused.value.focus() } catch (e) {}
  }
}

watch(() => props.open, (v) => {
  isOpen.value = v
})

watch(isOpen, (val) => {
  if (val) openDrawer()
  else closeDrawer()
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeyDown)
  document.body.style.overflow = ''
})

function close() {
  isOpen.value = false
  emit('update:open', false)
}
</script>