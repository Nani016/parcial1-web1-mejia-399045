<template>
  <div>
    <PublishBox @add-post="addPost" />
    <Post v-for="p in posts" :key="p.id" :post="p" @toggle-like="toggleLike" />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import PublishBox from '../components/PublishBox.vue'
import Post from '../components/Post.vue'

const posts = reactive([
  { id: 1, author: 'Laura R.', time: '2 hrs', text: '¡Un día genial construyendo interfaces!', likes: 2, liked: false },
  { id: 2, author: 'Carlos G.', time: '1 day', text: 'Compartiendo recursos para aprender Flexbox. Muy útiles.', likes: 5, liked: false }
])

function addPost(text){
  posts.unshift({ id: Date.now(), author: 'Tú', time: 'Ahora', text, likes: 0, liked: false })
}

function toggleLike(id){
  const p = posts.find(p => p.id === id)
  if(!p) return
  p.liked = !p.liked
  p.likes += p.liked ? 1 : -1
}
</script>