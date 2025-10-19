<template>
  <aside class="right" aria-label="Sugerencias">
    <div class="suggest">
      <h4>Sugerencias</h4>
      <div class="item" v-for="n in 2" :key="n">
        <img :src="`https://picsum.photos/seed/s${n}/40/40`" style="width:40px;height:40px;border-radius:6px;object-fit:cover" alt=""/>
        <div>
          <strong>Proyecto {{ n }}</strong>
          <div style="color:var(--muted);font-size:13px">Te puede interesar</div>
        </div>
      </div>
    </div>
  </aside>
</template>