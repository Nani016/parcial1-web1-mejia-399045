<template>
  <div class="card publish">
    <img src="https://picsum.photos/seed/u0/64/64" style="width:64px;height:64px;border-radius:8px;object-fit:cover" alt="" />
    <div style="flex:1">
      <textarea v-model="newPost" rows="3" placeholder="¿Qué estás pensando?" style="width:100%;border-radius:10px;padding:8px;border:1px solid #e6e9ee"></textarea>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px">
        <div style="display:flex;gap:8px">
          <button id="btnPhoto" style="background:transparent;border:none;cursor:pointer">📷 Foto</button>
          <button id="btnVideo" style="background:transparent;border:none;cursor:pointer">🎥 Video</button>
        </div>
        <button class="btn" @click="publish">Publicar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['add-post'])
const newPost = ref('')

function publish(){
  if(!newPost.value.trim()) return alert('Escribe algo antes de publicar')
  emit('add-post', newPost.value)
  newPost.value = ''
}
</script>