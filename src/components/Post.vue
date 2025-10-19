<template>
  <article class="card post">
    <img :src="`https://picsum.photos/seed/u${post.id}/64/64`" style="width:64px;height:64px;border-radius:8px;object-fit:cover" alt="" />
    <div class="body" style="flex:1">
      <div style="display:flex;align-items:center;gap:8px">
        <strong>{{ post.author }}</strong>
        <div class="meta">· {{ post.time }}</div>
      </div>
      <p>{{ post.text }}</p>
      <div class="post-actions">
        <span class="like" :class="{ active: post.liked }" @click="$emit('toggle-like', post.id)">👍 {{ post.likes }}</span>
        <span>💬 Comentar</span>
        <span>↗️ Compartir</span>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({ post: Object })
defineEmits(['toggle-like'])
</script>